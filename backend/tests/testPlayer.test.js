const Player = require("../modules/Player.js");
const Dice = require("../modules/Dice.js")

test("Checks if Player can be generated", () =>{
    const testPlayer = new Player();
    for(let i = 0; i<5; i++) {
        expect(testPlayer.diceArray[i]).toBeInstanceOf(Dice)
    }
})

test("Checks if Player can roll dice", () => {
    const testPlayer = new Player();
    // console.log("Players old dice: ", testPlayer.diceArray.map(dice => dice.value));
    testPlayer.rollDice();
    // console.log("New dice: ", testPlayer.diceArray.map(dice => dice.value));

    // Manually sets "isSaved" to "yes" on dice on index 0, 1 and 2.
    for(let i = 0; i < 3; i++) {
        testPlayer.diceArray[i].flipIsSaved();
    }

    testPlayer.rollDice();
    // console.log("Newest dice: ", testPlayer.diceArray.map(dice => dice.value));
})