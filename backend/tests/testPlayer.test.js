const Player = require("../modules/Player.js");
const Dice = require("../modules/Dice.js")

test("Checks if Player can be generated", () =>{
    const testPlayer1 = new Player();
    for(let i = 0; i<5; i++) {
        expect(testPlayer1.diceArray[i]).toBeInstanceOf(Dice)
    }
})