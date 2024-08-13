const Dice = require("./Dice.js");
const Scoreboard = require("./Scoreboard.js");
const Scores = require("./Scores.js");
const { v4: uuidv4 } = require("uuid");

class Player {
  constructor() {
    this.name = null;
    this.playerId = uuidv4();
    this.diceArray = [];
    this.roundsPlayed = 0;
    this.scoreboard = new Scoreboard();

    // Puts 5 dice in array
    for (let i = 0; i < 5; i++) {
      this.diceArray.push(new Dice());
    }
  }

  setName(name) {
    this.name = name;
  }

  rollDice() {
    this.diceArray.forEach((dice) => {
      if (!dice.isSaved) {
        dice.roll();
      }
    });
  }

  resetDice() {
    this.diceArray.forEach((dice) => {
      dice.resetDice();
    });
  }

  increaseRoundsPlayed() {
    this.roundsPlayed++;
  }

  // Returns object with all possible scores.
  getScores() {
    const score = new Scores(this.diceArray);
    return score.returnScoresPossible();
  }

  // Returns scoreboard
  getScoreboard() {
    // Calculates bonus
    this.scoreboard.calculateBonus();
    this.scoreboard.calculateTotalSum();
    return this.scoreboard;
  }

  // Updates scoreboard without changing or returning anything
  updateScoreboardNoChanges() {
    this.scoreboard.calculateBonus();
    this.scoreboard.calculateTotalSum();
  }

  // Updates one value on scoreboard
  // Return "true" if successful, otherwise "false"
  updateScore(toBeChanged, newValue) {
    if (this.scoreboard.updateScore(toBeChanged, newValue)) {
      this.increaseRoundsPlayed();
      return true;
    }
    return false;
  }
}

module.exports = Player;
