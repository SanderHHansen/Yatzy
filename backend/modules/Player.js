const Dice = require("./Dice.js");
const Scoreboard = require("./Scoreboard.js");

class Player {
    constructor() {
        this.name = null;
        this.diceArray = [];
        this.scoreboard = new Scoreboard();

        // Puts 5 dice in array
        for(let i = 0; i < 5; i++) {
            this.diceArray.push(new Dice());
        }
    }

    rollDice() {
        this.diceArray.forEach((dice) => {
            if (!dice.isSaved) {
                dice.roll()
            }
        })
    }
}

module.exports = Player;