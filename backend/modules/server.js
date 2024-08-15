const io = require("socket.io")(3000);

io.on("connection", socket => {
  console.log("Koblet til serveren!" + socket.id);
})