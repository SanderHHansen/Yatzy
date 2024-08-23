const Scores = require("../modules/Scores.js");
const Dice = require("../modules/Dice.js");

// Creating mock diceArray with 5 dice
const diceArray1 = [];

for (let i = 0; i < 5; i++) {
  const newDice = new Dice();
  newDice.roll();
  diceArray1.push(newDice);
}

const shouldValuesBeRigged = true; // If specific values are needed, overwrite this.

if (shouldValuesBeRigged) {
  const specificValues = [1, 1, 1, 1, 4];
  for (let i = 0; i < 5; i++) {
    diceArray1[i].value = specificValues[i];
  }
}

// Creating Scores
const testScore = new Scores(diceArray1);

// For logging purposes
test("Checks if Scores exist", () => {
  console.log(testScore);
  console.log(testScore.returnScoresPossible());
});
