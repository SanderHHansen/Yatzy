// Handling Socket.IO connections
const { server, app } = require("../app.js");
const { Server } = require("socket.io");

// Socket.IO setup and integration
const io = new Server(server);

const handleSockets = (io, app) => {
  io.on("connection", (socket) => {
    console.log("A user connected");
  });

  io.on("disconnect", (socket) => {
    console.log("A user disconnected");
  });
};

// Initializing sockets
handleSockets(io, app);

module.exports = { io };
