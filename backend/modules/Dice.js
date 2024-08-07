class Dice {
    constructor() {
        this.value = null;
        this.isSaved = false;
    }

    flipIsSaved() {
        this.isSaved = !this.isSaved;
    }

    roll() {
        this.value = Math.floor((Math.random()*6)+1);
    }

    resetDice() {
        this.value = null;
        this.isSaved = false;
    }
}

module.exports = Dice;