// Tests testTall.js

const sumOfTwoNumbers = require("../modules/testTall.js");

test("Checks if it works for 10 + 20", () => {
    expect(sumOfTwoNumbers(10, 20)).toBe(30);
})

test("Checks if it works for 5+8", () => {
    expect(sumOfTwoNumbers(5, 8)).toBe(13);
})