class Scoreboard {
  constructor() {
    this.ones = null;
    this.twos = null;
    this.threes = null;
    this.fours = null;
    this.fives = null;
    this.sixes = null;
    this.bonus = null;
    this.upperSum = null;
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

  // Function to change one value. If value has been changed, returns true. Otherwise, returns false.
  updateScore(toBeChanged, newValue) {
    if (this[toBeChanged] != null) {
      // Value not allowed to be changed again. Returns false.
      return false;
    }

    this[toBeChanged] = newValue;
    return true;
  }

  // Calculates sum of upper values. Updates value accordingly.
  calculateBonus() {
    this.upperSum =
      this.ones +
      this.twos +
      this.threes +
      this.fours +
      this.fives +
      this.sixes;

    if (this.upperSum >= 63) {
      this.bonus = 35;
    }
  }
}

module.exports = Scoreboard;
