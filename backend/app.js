// Imports
const express = require("express");
const path = require("path");
const http = require("http");
const apiRoutes = require("./modules/Api.js");
const frontendRoutes = require("./modules/Routes.js");
const cors = require("cors");
const { handleSockets, sendGameData } = require("./modules/Sockets.js");
// TODO All current games. Should be changed to postgres-database.

const app = express();
const port = process.env.PORT || 3000;

// Creating HTTP-server for Socket.IO implementation
const server = http.createServer(app);

// Middleware setup
app.use(express.json());
app.use(cors());

// Routing setup
app.use("/api", apiRoutes); // Reroutes API-calls to own file
app.use(frontendRoutes); // Reroutes frontend-routes

// Starting server on specified port
server.listen(port, () => {
  console.log(`Backend server running on port: ${port}`);
  handleSockets(server);
});

module.exports = { server, app };
