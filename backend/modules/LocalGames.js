const { allGames } = require("../app.js");

// Function that adds game to allGames
function addGameToAllGames(game) {
  allGames.push(game);
}

module.exports = { addGameToAllGames };
