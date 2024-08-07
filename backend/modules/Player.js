const Dice = require("./Dice.js");

class Player {
    constructor() {
        this.name = null;
        this.diceArray = [];

        // Puts 5 dice in array
        for(let i = 0; i < 5; i++) {
            this.diceArray.push(new Dice());
        }
    }
}

module.exports = Player