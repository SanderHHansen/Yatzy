const { Server } = require("socket.io");
const {
  getGameByID,
  createGame,
  addPlayerToGame,
  removeGameFromAllGames,
} = require("./GameManager.js");

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

    socket.on("disconnect", () => {
      console.log("A user disconnected");

      // Delets gameId when all players leave that socket/room.
      if (socket.gameId) {
        const gameId = socket.gameId;
        const playerId = socket.playerId;
        checkAndRemoveGameIfEmpty(gameId, playerId);
      }
    });

    const checkAndRemoveGameIfEmpty = (gameId, playerId) => {
      if (gameId) {
        // Removes player from gameData.
        game = getGameByID(gameId);
        game.removePlayerFromGame(playerId);

        const numUsers = io.sockets.adapter.rooms.get(gameId)?.size || 0;
        if (numUsers === 0) {
          console.log("Removing game with ID: " + gameId + " from allGames.");
          removeGameFromAllGames(gameId);
        }
      }
    };

    const handleJoinGame = (socket, gameId) => {
      // Leaves all previous rooms
      for (const room of socket.rooms) {
        if (room !== socket.id) {
          // socket.id represents the individual socket room
          const gameId = socket.gameId;
          const playerId = socket.playerId;
          socket.leave(room);
          checkAndRemoveGameIfEmpty(gameId, playerId);
        }
      }

      // Adds user to Room.
      socket.join(gameId);
      console.log("User joined socket called: " + gameId);

      // Sending gameData
      sendGameData(gameId);

      // Setts socket values
      socket.gameData = getGameByID(gameId);
      socket.gameId = gameId;
      socket.playerId = socket.gameData.playerArray.at(-1).playerId;
      socket.player = socket.gameData.getPlayerByPlayerId(socket.playerId);

      socket.emit("playerId", socket.playerId);

      // Redirecting user to game site.
      socket.emit("redirect", "/game");
    };

    socket.on("joinGame", (gameId, playerName) => {
      const game = getGameById(gameId);
      // Checks if game is still on round 1.
      if (isGameStillOnRoundOne()) {
        game.addPlayerToGame(playerName);
      } else {
        console.log("Game has already started. Player can't join game.");
      }

      // Adds player to room so they can play or spectate.
      handleJoinGame(socket, gameId);
    });

    // Creates a new game. Host is "hostName".
    socket.on("createNewGame", (hostName) => {
      console.log("Creating new game. Host: " + hostName);
      const gameId = createGame(hostName);
      handleJoinGame(socket, gameId);
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
