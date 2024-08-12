const Dice = require("./Dice.js");
const Scoreboard = require("./Scoreboard.js");
const Scores = require("./Scores.js");

class Player {
  constructor() {
    this.name = null;
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
    return this.scoreboard;
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
