// Handling Socket.IO connections
const { server, app } = require("../app.js");
const { Server } = require("socket.io");

// Socket.IO setup and integration
const io = new Server(server);

const handleSockets = (io, app) => {
  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

function sendGameData(gameId, data) {
  io.to(gameId).emit("gameUpdate", data);
}

// Initializing sockets
handleSockets(io, app);

module.exports = { io, sendGameData };
