class Scoreboard {
  constructor() {
    this.ones = null;
    this.twos = null;
    this.threes = null;
    this.fours = null;
    this.fives = null;
    this.sixes = null;
    this.onePair = null;
    this.twoPairs = null;
    this.threeOfAKind = null;
    this.fourOfAKind = null;
    this.fullHouse = null;
    this.smallStraight = null;
    this.largeStraight = null;
    this.yatzy = null;
    this.chance = null;
  }

  // Function to change one value. If value has been changed, returns 1. Otherwise, returns 0.
  updateScore(toBeChanged, newValue) {
    if (this[toBeChanged] != null) { // Value not allowed to be changed again. Returns 0.
      return 0;
    }

    this[toBeChanged] = newValue;
    return 1;
  }
}

module.exports = Scoreboard;