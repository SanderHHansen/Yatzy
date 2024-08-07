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
        this.yatzy = null;
        this.chance = null;

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

    calculateOnePair() {
        for(let i = 6; i > 0; i--) {
            if (this.values.filter(element => element === i).length >= 2) {
                this.onePair = i*2;
                break;
            }
        }
    }

    calculateTwoPairs() {
        let returnvalue = 0;
        let count = 0
    }
    calculateThreeOfAKind() {
        let returnvalue = 0;

    }
    calculateFourOfAKind() {
        let returnvalue = 0;

    }
    calculateFullHouse() {
        let returnvalue = 0;
    }
    calculateSmallStraight() {
        let returnvalue = 0;
    }
    calculateLargeStraight() {
        let returnvalue = 0;
    }
    calculateYatzy() {
        let returnvalue = 0;
    }
    calculateChance() {
        let returnvalue = 0;
    }
}

module.exports = Scores;