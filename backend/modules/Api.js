const express = require("express");
const router = express.Router();

// ! Only for testing. Returns dummy-player
const Player = require("./Player");

router.get("/dummy-player", (req, res) => {
  const player = new Player();
  player.setName("Cake");
  player.updateScore("ones", 5);
  player.updateScore("twos", 10);
  player.updateScore("threes", 15);
  res.json(player);
});
// ! End of dummy block

module.exports = router;
