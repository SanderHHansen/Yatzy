const Yatzy = require("../modules/Yatzy.js");
const Player = require("../modules/Player.js");

// Creates 3 players
const player1 = new Player();
const player2 = new Player();
const player3 = new Player();

// Creates 1 Yatzy-game.
const testYatzy = new Yatzy(player1);

// Adds the other two.

testYatzy.addPlayerToGame(player2);
testYatzy.addPlayerToGame(player3);

test("Checks if all players are in the game", () => {
  // console.log(testYatzy.playerArray);
})

test("Checks if current player is the host", () => {
  testYatzy.changeCurrentPlayer();
  expect(testYatzy.currentPlayer).toStrictEqual(player1);
})

test("Checks if host is changed correctly", () => {
  testYatzy.changeCurrentPlayer();
  expect(testYatzy.currentPlayer).toStrictEqual(player1);

  // Manually change value of first player.
  player1.roundsPlayed = 1;
  testYatzy.changeCurrentPlayer();
  expect(testYatzy.currentPlayer).toStrictEqual(player2);
})

