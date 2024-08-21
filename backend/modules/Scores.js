// Return each possible score value for a given diceArray

class Scores {
  constructor(diceArray) {
    // Collects raw integers from diceArray
    this.values = diceArray.map((dice) => dice.value);

    // Scores to be returned
    this.ones = 0;
    this.twos = 0;
    this.threes = 0;
    this.fours = 0;
    this.fives = 0;
    this.sixes = 0;
    this.onePair = 0;
    this.twoPairs = 0;
    this.threeOfAKind = 0;
    this.fourOfAKind = 0;
    this.fullHouse = 0;
    this.smallStraight = 0;
    this.largeStraight = 0;
    this.yatzy = 0;
    this.chance = 0;

    // Runs methods for calculating values
    this.calculateUpper();
    this.calculateOnePair();
    this.calculateTwoPairs();
    this.calculateThreeOfAKind();
    this.calculateFourOfAKind();
    this.calculateFullHouse();
    this.calculateSmallStraight();
    this.calculateLargeStraight();
    this.calculateYatzy();
    this.calculateChance();
  }

  calculateUpper() {
    const upper = (number) => {
      const frequency = this.values.filter(
        (element) => element === number
      ).length;
      return frequency * number;
    };

    this.ones = upper(1);
    this.twos = upper(2);
    this.threes = upper(3);
    this.fours = upper(4);
    this.fives = upper(5);
    this.sixes = upper(6);
  }

  /* Functions that returns the highest values that occurs at least "frequency" amount of times,
   * multiplicated by "frequency" given.
   * Ignores "valueToIgnore". If no values should be ignore, call function with (x, null).
   */
  frequencyFinder(frequency, valueToIgnore) {
    for (let i = 6; i > 1; i--) {
      // Checks if iteration should be skipped.
      if (valueToIgnore != null && valueToIgnore === i) {
        continue;
      }

      // Checks if pair exists.
      if (this.values.filter((element) => element === i).length >= frequency) {
        return i;
      }
    }
    return 0;
  }

  calculateOnePair() {
    this.onePair = this.frequencyFinder(2, null) * 2;
  }

  calculateTwoPairs() {
    let firstPair = this.onePair; // Collects first pair.
    let secondPair = this.frequencyFinder(2, firstPair / 2) * 2;

    if (firstPair > 0 && secondPair > 0) {
      this.twoPairs = firstPair + secondPair;
    }
  }

  calculateThreeOfAKind() {
    this.threeOfAKind = this.frequencyFinder(3, null) * 3;
  }

  calculateFourOfAKind() {
    this.fourOfAKind = this.frequencyFinder(4, null) * 4;
  }

  calculateFullHouse() {
    let trio = this.threeOfAKind; // Collects trio.
    let double = this.frequencyFinder(2, trio / 3) * 2;

    if (trio > 0 && double > 0) {
      this.fullHouse = trio + double;
    }
  }

  calculateSmallStraight() {
    if (this.values[0] === null) {
      return 0;
    }

    if (this.frequencyFinder(2, null) === 0 && this.sixes === 0) {
      this.smallStraight = 15;
    }
  }

  calculateLargeStraight() {
    if (this.values[0] === null) {
      return 0;
    }

    if (this.frequencyFinder(2, null) === 0 && this.ones === 0) {
      this.largeStraight = 20;
    }
  }

  calculateYatzy() {
    if (this.frequencyFinder(5, null) != 0) {
      this.yatzy = 50;
    }
  }

  calculateChance() {
    let returnValue = 0;
    for (let i = 0; i < 5; i++) {
      returnValue += this.values[i];
    }
    this.chance = returnValue;
  }

  returnScoresPossible() {
    return {
      ones: this.ones,
      twos: this.twos,
      threes: this.threes,
      fours: this.fours,
      fives: this.fives,
      sixes: this.sixes,
      onePair: this.onePair,
      twoPairs: this.twoPairs,
      threeOfAKind: this.threeOfAKind,
      fourOfAKind: this.fourOfAKind,
      fullHouse: this.fullHouse,
      smallStraight: this.smallStraight,
      largeStraight: this.largeStraight,
      yatzy: this.yatzy,
      chance: this.chance,
    };
  }
}

module.exports = Scores;
