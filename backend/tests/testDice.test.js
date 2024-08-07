const Dice = require("../modules/Dice.js");


const testDice = new Dice();

test("Sjekker om terning sin verdi er null", () => {
    expect(testDice.value).toBe(null)
})

test("Endrer verdier for å se om de funker", () => {
    const oldValue = testDice.value;
    testDice.roll();
    expect(oldValue).not.toBe(!testDice.value)
})

test("Sjekker om terning sin isSaved er false", () => {
    expect(testDice.isSaved).toBe(false)
})



test("Sjekker om terning sin isSaved er false", () => {
    testDice.flipIsSaved(); // Endrer på verdien
    expect(testDice.isSaved).toBe(true)
})


