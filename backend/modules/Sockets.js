const { Server } = require("socket.io");
const { getAllGames, getGameByID } = require("./GameManager.js");

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
      sendGameData(gameId);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
}

function sendGameData(gameId) {
  const data = getGameByID(gameId);

  if (io && data) {
    // Checks if io exists and data exists.
    io.to(gameId).emit("gameUpdate", data);
  } else if (!io) {
    console.error("Socket.io is not initialized");
  } else if (!data) {
    console.error("Game-data does not exist.");
  }
}

module.exports = { handleSockets, sendGameData };
