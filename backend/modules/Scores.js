// Return each possible score value for a given diceArray

class Scores {
    constructor(diceArray) {
        this.values = diceArray.map(dice => dice.value);
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
        this.yahtzee = null;
        this.chance = null;
    }

    calculateUpper() {
        const upper = (number) => {
            const frequency = this.values.filter(element => element === number).length
            return frequency * number
        }

        this.ones = upper(1);
        this.twos = upper(2);
        this.threes = upper(3);
        this.fours = upper(4);
        this.fives = upper(5);
        this.sixes = upper(6);
    }
}

module.exports = Scores;