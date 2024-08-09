// Generel setup
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// Socket.IO dashboard
const {instrument} = require("@socket.io/admin-ui");

const app = express();
const port = process.env.PORT || 3000;

// Setup for middleware
app.use(express.json());
app.use(cors());

// Creating HTTP-server for Socket.IO implementation
const server = http.createServer(app);

// Integration of Socket.IO
const io = new Server(server, {
  cors: { // CORS-domains
    origin: ["https://admin.socket.io"], 
    methods: ["GET", "POST"],
  }
});

instrument(io, {auth: false}); // Socket.IO admin-UI

// Handling Socket.IO connections
io.on("connection", (socket) => {
  console.log("A user connected");
})

io.on("disconnect", (socket) => {
  console.log("A user disconnected");
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Starting server on port 3000
server.listen(port, () => {
  console.log(`Backend server running on port: ${port}`);
})