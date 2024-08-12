// Imports
const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { instrument } = require("@socket.io/admin-ui"); //! Ikke i bruk.
const handleSockets = require("./modules/Sockets.js");
const apiRoutes = require("./modules/Api.js");
const frontendRoutes = require("./modules/Routes.js");

const app = express();
const port = process.env.PORT || 3000;

// Creating HTTP-server for Socket.IO implementation
const server = http.createServer(app);

// Middleware setup
app.use(express.json());
app.use(cors()); // ! Kan kanskje slettes senere?

// Routing setup
app.use("/api", apiRoutes); // Reroutes API-calls to own file
app.use(frontendRoutes); // Reroutes frontend-routes

// TODO All current games. Should be changed to postgres-database.
app.locals.games = {};

// Socket.IO setup and integration
const io = new Server(server, {
  cors: {
    // CORS-domains
    origin: ["https://admin.socket.io", "http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

// Delegating sockets to Sockets.js
handleSockets(io, app);

// Starting server on specified port
server.listen(port, () => {
  console.log(`Backend server running on port: ${port}`);
});

instrument(io, { auth: false }); // Socket.IO admin-UI //! Socket.IO Admin-stuff
