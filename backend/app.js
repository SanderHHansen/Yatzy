// General setup
const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const handleSockets = require("./modules/Sockets.js");
const apiRoutes = require("./modules/Api.js");

const app = express();
const port = process.env.PORT || 3000;

// Socket.IO dashboard
const { instrument } = require("@socket.io/admin-ui"); //! Ikke i bruk.

// Setup for middleware
app.use(express.json());
app.use(cors()); // ! Kan kanskje slettes senere?

// Reroutes API-calls to own file
app.use("/api", apiRoutes);

// TODO All current games. Should be changed to postgres-database.
app.locals.games = {};

// Creating HTTP-server for Socket.IO implementation
const server = http.createServer(app);

// Integration of Socket.IO
const io = new Server(server, {
  cors: {
    // CORS-domains
    origin: ["https://admin.socket.io", "http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

// Delegating sockets to Sockets.js
handleSockets(io, app);

// Serving static content from frontend
const buildPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(buildPath));

// Serving index.html for all unknown routes
app.get("*", (req, res) => {
  const filePath = path.join(buildPath, "index.html");
  res.sendFile(filePath);
});

// Starting server on port 3000
server.listen(port, () => {
  console.log(`Backend server running on port: ${port}`);
});

//! Socket.IO Admin-stuff

instrument(io, { auth: false }); // Socket.IO admin-UI
