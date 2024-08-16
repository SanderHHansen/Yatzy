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

    socket.on("joinGame", (gameId) => {
      socket.join(gameId); // Client joins game based on gameId
      console.log("User joined socket called: " + gameId);
      sendGameData(gameId);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });

    socket.on("createNewGame", (hostName) => {
      console.log("Creating new game. Host: " + hostName);
      const gameId = createGame(hostName);

      // Adds user to Room.
      socket.join(gameId);
      console.log("User joined socket called: " + gameId);

      // Sending gameData update.
      sendGameData(gameId);

      // Sending back unique player-ID.
      const playerId = getGameByID(gameId).host.playerId;
      socket.emit("playerId", playerId);

      // Redirecting user to game site.
      socket.emit("redirect", "/game");
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
