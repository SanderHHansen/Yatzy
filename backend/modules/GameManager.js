/* Module that keeps track of all games currently running on the server.
 */
const Yatzy = require("./Yatzy.js");
const Player = require("./Player.js");

let allGames = [];

function addGameToAllGames(game) {
  allGames.push(game);
}

/* Returns game that matches ID given.
 * Accepts full gameId, or the first 3
 */
function getGameByID(id) {
  // Checks if length is 3 (Is the case when joining already existing game)
  if (id.length === 3) {
    return (
      allGames.find((game) => game.gameId.slice(0, 3).toUpperCase() === id) ||
      null
    );
  }

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
  const game = getGameByID(gameId);
  const newPlayer = new Player(playerName);
  console.log("Adding this player to the game: ");
  console.log(newPlayer);
  game.addPlayerToGame(newPlayer);
}

// Removes game from allGames
function removeGameFromAllGames(gameId) {
  const game = getGameByID(gameId);

  if (game) {
    allGames = allGames.filter((element) => element.gameId !== gameId);
  }
}

module.exports = {
  addGameToAllGames,
  getAllGames,
  getGameByID,
  createGame,
  addPlayerToGame,
  removeGameFromAllGames,
};
