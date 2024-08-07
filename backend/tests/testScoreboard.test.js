const Scoreboard = require("../modules/Scoreboard.js");

let testScoreboard = new Scoreboard();

test("Checks if 'twoPair' value is set to null", () =>{
  expect(testScoreboard.twoPairs).toBe(null);
})


test("Checks if 'twoPair' value is set to 10", () =>{
  // Updates value to 10
  testScoreboard.updateScore("twoPairs", 10);
  expect(testScoreboard.twoPairs).toBe(10);
})

test("Checks if 'twoPair' value can be updated again", () =>{
  // Tries to update to 20 (Should not be possible)
  testScoreboard.updateScore("twoPairs", 20);
  expect(testScoreboard.twoPairs).toBe(10);
})