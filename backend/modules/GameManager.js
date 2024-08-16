/* Module that keeps track of all games currently running on the server.
 */
const allGames = [];

function addGameToAllGames(game) {
  allGames.push(game);
}

// Returns game that matches ID given.
function getGameByID(id) {
  return allGames.find((game) => game.gameId === id) || null;
}

function getAllGames() {
  return allGames;
}

module.exports = { addGameToAllGames, getAllGames, getGameByID };
