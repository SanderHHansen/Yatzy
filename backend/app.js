// Imports
const express = require("express");
const path = require("path");
const http = require("http");
const apiRoutes = require("./modules/Api.js");
const frontendRoutes = require("./modules/Routes.js");

const app = express();
const port = process.env.PORT || 3000;

// Creating HTTP-server for Socket.IO implementation
const server = http.createServer(app);

// Middleware setup
app.use(express.json());

// Routing setup
app.use("/api", apiRoutes); // Reroutes API-calls to own file
app.use(frontendRoutes); // Reroutes frontend-routes

// TODO All current games. Should be changed to postgres-database.
app.locals.games = {};

// Starting server on specified port
server.listen(port, () => {
  console.log(`Backend server running on port: ${port}`);
});

module.exports = { server, app };
