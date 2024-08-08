const Yatzy = require("../modules/Yatzy.js");
const Player = require("../modules/Player.js");

let testYatzy;
let player1, player2, player3;

beforeEach(() => {
  // Creates 3 players
  player1 = new Player();
  player1.setName("Host and player 1");
  player2 = new Player();
  player2.setName("Player 2");
  player3 = new Player();
  player3.setName("Player 3");
  
  // Creates 1 Yatzy-game.
  testYatzy = new Yatzy(player1);
  
  // Adds the other two to the game.
  testYatzy.addPlayerToGame(player2);
  testYatzy.addPlayerToGame(player3);
});

test("Checks if all players are in the game", () => {
  // console.log(testYatzy.playerArray);
})

test("Checks if current player is the host", () => {
  // console.log("Host is:" + testYatzy.host.name);
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

test("Checks functionality of game", () => {
  // console.log("Host is:" + testYatzy.host.name);
  testYatzy.rollDice(player1);
  
  // Saves scores to zero.
  testYatzy.selectScore(player1, "ones");
  // console.log(testYatzy.playerArray[0]);
  
  // Updates curentPlayer (should be player 2 now)
  testYatzy.changeCurrentPlayer();
  expect(testYatzy.currentPlayer).toStrictEqual(player2);
  // console.log("New current player is successfully" + testYatzy.currentPlayer.name);
  
  // Rolls dice for 2 and set them to two.
  testYatzy.rollDice(player2);
  testYatzy.selectScore(player2, "twos");

  // Updates player again
  testYatzy.changeCurrentPlayer();
  expect(testYatzy.currentPlayer).toStrictEqual(player3);
  // console.log("New current player is successfully" + testYatzy.currentPlayer.name);

  // Rolls dice for 3 and set them to threes.
  testYatzy.rollDice(player3);
  testYatzy.selectScore(player3, "threes");
  
  // Updates player again
  testYatzy.changeCurrentPlayer();
  expect(testYatzy.currentPlayer).toStrictEqual(player1);
  // console.log("New current player is successfully" + testYatzy.currentPlayer.name);
})

test("Checks end of game", () => {
  testYatzy.playerArray[0].roundsPlayed=15;
  testYatzy.playerArray[1].roundsPlayed=15;
  testYatzy.playerArray[2].roundsPlayed=15;
  testYatzy.finishRound();
})