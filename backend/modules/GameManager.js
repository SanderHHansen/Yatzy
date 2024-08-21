/* Module that keeps track of all games currently running on the server.
 */
const Yatzy = require("./Yatzy.js");
const Player = require("./Player.js");

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

/* Creates game based on hosts preferred nickname.
 * Returns gameId*/
function createGame(hostName) {
  const host = new Player(hostName);
  const game = new Yatzy(host);
  addGameToAllGames(game);
  return game.gameId;
}

// Adds player to given game, with given name.
function addPlayerToGame(playerName, gameId) {
  const game = getGameById(gameId);
  game.addPlayerToGame(playerName);
}

module.exports = {
  addGameToAllGames,
  getAllGames,
  getGameByID,
  createGame,
  addPlayerToGame,
};
