const { Server } = require("socket.io");
const { getGameByID, createGame } = require("./GameManager.js");

let io; // Oppretter en referanse for 'io' som vil bli satt senere

function handleSockets(server) {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  }); // io instansen opprettes med server objektet

  io.on("connection", (socket) => {
    console.log("A user connected");

    // Todo This code is not working properly.
    socket.on("joinGame", (gameId) => {
      console.log("joinGame code is running!");
      socket.join(gameId); // Client joins game based on gameId
      socket.gameId = gameId;
      console.log("User joined socket called: " + gameId);
      const gameData = getGameByID(gameId);
      sendGameData(gameId);

      /* Saves gameData to Socket */
      if (gameData) {
        socket.gameData = gameData;
        console.log("Game data was set: ", gameData);
      } else {
        console.error("Game data was not found for gameId: " + gameId);
      }
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });

    // TODO: Should be combining this and "joinGame" somehow.
    socket.on("createNewGame", (hostName) => {
      console.log("Creating new game. Host: " + hostName);
      const gameId = createGame(hostName);

      // Adds user to Room.
      socket.join(gameId);
      console.log("User joined socket called: " + gameId);

      // Sending gameData update.
      sendGameData(gameId);

      // Setting socket values
      socket.gameData = getGameByID(gameId);
      socket.gameId = gameId;
      socket.playerId = socket.gameData.host.playerId;
      socket.player = socket.gameData.getPlayerByPlayerId(socket.playerId);

      socket.emit("playerId", socket.playerId);

      // Redirecting user to game site.
      socket.emit("redirect", "/game");
    });

    socket.on("rollDice", () => {
      // console.log("Rolling dice for game:" + socket.gameId);
      const game = socket.gameData;
      game.rollDice(socket.player);
      sendGameData(socket.gameId);
    });

    // Flips isSaved for a given die.
    socket.on("flipIsSavedForDie", (dieIndex) => {
      // console.log("Index received is: " + dieIndex);
      socket.gameData.flipIsSaved(socket.player, dieIndex);
      // console.log("Updated dieValue for player: " + socket.playerId);
      sendGameData(socket.gameId);
    });

    // Sets score for current player for scoreToBeSelected.
    socket.on("selectingScore", (sectionToBeScored) => {
      console.log("Setting score for section: " + sectionToBeScored);
      socket.gameData.selectScore(socket.player, sectionToBeScored);
      sendGameData(socket.gameId);
    });
  });
}

function sendGameData(gameId) {
  const data = getGameByID(gameId);

  if (io && data) {
    // Checks if io exists and data exists.
    io.to(gameId).emit("gameUpdate", data);
    console.log("Game update has been sent to socket: " + gameId);
  } else if (!io) {
    console.error("Socket.io is not initialized");
  } else if (!data) {
    console.error("Game-data does not exist.");
  }
}

module.exports = { handleSockets, sendGameData };
