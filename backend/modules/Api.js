const express = require("express");
const router = express.Router();
const { addGameToAllGames } = require("./GameManager.js");

// ! Only for testing. Adds dummy game to allGames.
const Player = require("./Player");
const Yatzy = require("./Yatzy");

router.get("/dummy-game", (req, res) => {
  const player1 = new Player();
  const game = new Yatzy(player1);
  const player2 = new Player();
  game.addPlayerToGame(player2);
  const player3 = new Player();
  game.addPlayerToGame(player3);
  const player4 = new Player();
  game.addPlayerToGame(player4);

  // Manually sets gameId
  game.gameId = "testId";

  // updates values for players
  player1.setName("Cake");
  player1.updateScore("ones", 5);
  player1.updateScore("twos", 10);
  player1.updateScore("threes", 15);
  player1.updateScore("chance", 26);
  player2.setName("Tyler");
  player2.updateScore("ones", 10);
  player2.updateScore("twos", 20);
  player2.updateScore("threes", 30);
  player3.setName("Vibeke");
  player3.updateScore("ones", 8);
  player3.updateScore("twos", 9);
  player3.updateScore("threes", 25);
  player4.setName("Huleridder");
  player4.updateScore("sixes", 12);
  player4.updateScore("fullHouse", 25);
  player4.updateScore("yatzy", 50);
  game.rollDice(player1);
  game.flipIsSaved(player1, 2);
  game.flipIsSaved(player1, 4);
  game.updateAllScoreboards();
  addGameToAllGames(game);
  console.log("Game was added to allGames with ID:" + game.gameId);
});

router.get("/dummy-player", (req, res) => {
  const player = new Player();
  player.setName("Cake");
  player.updateScore("ones", 5);
  player.updateScore("twos", 10);
  player.updateScore("threes", 15);
  res.json(player);
});

router.get("/dummy-player2", (req, res) => {
  const player = new Player();
  player.setName("Smudi");
  player.updateScore("ones", 10);
  player.updateScore("twos", 20);
  player.updateScore("threes", 30);
  res.json(player);
});
// ! End of dummy block

module.exports = router;
