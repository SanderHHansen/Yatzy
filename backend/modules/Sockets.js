const { Server } = require("socket.io");
const { getAllGames } = require("./GameManager.js");

let io; // Oppretter en referanse for 'io' som vil bli satt senere

function handleSockets(server) {
  io = new Server(server); // io instansen opprettes med server objektet
  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("joinGame", (gameId) => {
      socket.join(gameId); // Client joins game based on gameId
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
}

function sendGameData(gameId) {
  const data = getAllGames.find((game) => game.gameId === gameId);

  if (io && data) {
    // Checks if io exists and data exists.
    io.to(gameId).emit("gameUpdate", data);
  } else {
    console.error("Socket.io is not initialized, or game-data does not exist.");
  }
}

module.exports = { handleSockets, sendGameData };
