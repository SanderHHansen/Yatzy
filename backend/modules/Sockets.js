// Handling Socket.IO connections

module.exports = (io, app) => {
  io.on("connection", (socket) => {
    console.log("A user connected");
  });

  io.on("disconnect", (socket) => {
    console.log("A user disconnected");
  });
};
