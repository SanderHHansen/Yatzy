// Return each possible score value for a given diceArray

class Scores {
    constructor(diceArray) {
        // Collects raw integers from diceArray
        this.values = diceArray.map(dice => dice.value);

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
            if (this.values.filter(element => element === i).length >= 2) { // Checks if pair exists.
                this.onePair = i*2;
                break;
            }
        }
    }

    calculateTwoPairs() {
        let amountOfPairs = 0; // Keep track of how many pairs have been counted.
        let returnValue = 0;

        for(let i = 6; i > 0; i--) {
            if (this.values.filter(element => element === i).length >= 2) {
                returnValue+= (i*2);
                amountOfPairs+=1;

                if (amountOfPairs === 2) { // Checks if two pairs have been found
                    this.twoPairs = returnValue;
                    break;
                }
            }
        }
    }
    calculateThreeOfAKind() {
        for(let i = 6; i > 0; i--) {
            if (this.values.filter(element => element === i).length >= 3) { // Checks if three of a kind exists.
                this.threeOfAKind = i*3;
                break;
            }
        }
    }
    calculateFourOfAKind() {
        for(let i = 6; i > 0; i--) {
            if (this.values.filter(element => element === i).length >= 4) { // Checks if four of a kind exists.
                this.fourOfAKind = i*4;
                break;
            }
        }
    }
    calculateFullHouse() {
        let threeOfAKind = this.threeOfAKind/3; // Gets the number there exists 3 of.

        if (threeOfAKind === 0) {
            return; // Returns if there wasn't a case of 3 of a kind.
        } 

        for(let i = 6; i > 0; i--) {
            if (this.values.filter(element => element === i).length >= 2) { // Checks if there is at least a pair.
                if (i === threeOfAKind) { // Checks if number has already been accounted for.
                    continue;
                }
                this.fullHouse = threeOfAKind*3+i*2
                break;
            }
        }
    }
    calculateSmallStraight() {

    }
    calculateLargeStraight() {

    }
    calculateYatzy() {

    }
    calculateChance() {

    }
}

module.exports = Scores;