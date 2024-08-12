// Handling Socket.IO connections

const handleSockets = (io, app) => {
  io.on("connection", (socket) => {
    console.log("A user connected");
  });

  io.on("disconnect", (socket) => {
    console.log("A user disconnected");
  });
};

module.exports = handleSockets;
