class Dice {
  constructor() {
    this.value = 0;
    this.isSaved = false;
  }

  flipIsSaved() {
    this.isSaved = !this.isSaved;
  }

  roll() {
    this.value = Math.floor(Math.random() * 6 + 1);
  }

  resetDice() {
    this.value = 0;
    this.isSaved = false;
  }
}

module.exports = Dice;
