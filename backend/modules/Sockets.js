const { Server } = require("socket.io");

let io; // Oppretter en referanse for 'io' som vil bli satt senere

function handleSockets(server) {
  io = new Server(server); // io instansen opprettes med server objektet
  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
}

function sendGameData(gameId, data) {
  if (io) {
    // Sjekker at 'io' er satt før du prøver å bruke det
    io.to(gameId).emit("gameUpdate", data);
  } else {
    console.error("Socket.io is not initialized.");
  }
}

module.exports = { handleSockets, sendGameData };
