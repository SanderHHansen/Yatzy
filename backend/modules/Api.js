const express = require("express");
const router = express.Router();

// ! Only for testing. Returns dummy-player
const Player = require("./Player");
const Yatzy = require("./Yatzy");

router.get("/dummy-game", (req, res) => {
  const player1 = new Player();
  const game = new Yatzy(player1);
  const player2 = new Player();
  game.addPlayerToGame(player2);

  // Manually sets gameId
  game.gameId = "testId";

  // updates values for players
  player1.setName("Cake");
  player1.updateScore("ones", 5);
  player1.updateScore("twos", 10);
  player1.updateScore("threes", 15);
  player2.setName("SmudiXoXoLegenden");
  player2.updateScore("ones", 10);
  player2.updateScore("twos", 20);
  player2.updateScore("threes", 30);
  game.updateAllScoreboards();

  res.json(game);
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
