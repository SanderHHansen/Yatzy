const Player = require("./Player.js");

class Yatzy {
  constructor(host) {
    this.host = host; // Person who created the lobby.
    this.playerArray = [host]; // Array with all the players.
    this.currentPlayer = host; // The player whos turn it is
    const rollCount = 0; // Keep track of number of throws current player has done
  }

  addPlayerToGame(newPlayer) {
    this.playerArray.push(newPlayer)
  }

  /* Checks playercount of every player. Updates currentPlayer to the one that has the least rounds played, 
  * and who is at the lowest index in players-array.
  */
  changeCurrentPlayer() {
    // Finds lowest rounds played
    let lowestRoundsPlayed = Infinity;
    this.playerArray.forEach(player => {
      if (player.roundsPlayed < lowestRoundsPlayed) {
        lowestRoundsPlayed = player.roundsPlayed;
      }
    })

    // Updates current player
    for(let i = 0; i < this.playerArray.length; i++) {
      let player = this.playerArray[i];
      if (player.roundsPlayed === lowestRoundsPlayed) {
        this.currentPlayer = player;
        return;
      }
    }
  }

  // Retrieves possible scores for currentPlayer
  getScores() {
    return this.currentPlayer.getScores();
  }

  /* Returns boolean based on if player trying to commit action
  * is currentPlayer or not.
  */
  isPlayerCurrentPlayer(player) {
    if (player === this.currentPlayer) {
      return true;
    } 
    return false;
  }

  // Logic for what happens after player finished round.
  finishRound() {
    // Resets rollCount
    this.rollCount = 0;

    // Checks if game is finished (All player have 15 rounds played).
    for(let i = 0; i < this.playerArray.length; i++) {
      let player = this.playerArray[i];
      if (player.roundsPlayed != 15) {
        this.changeCurrentPlayer();
        return;
      }
    }

    // All players had 15 round played. Game is over.
    this.endMatch();
  }

  // To be called when game has ended
  endMatch() {
    console.log("Congratulations to the winner!");
  }

  /* 
  * -- Commands players can do --
  */

  // Starts a new turn for the current player
  rollDice(player) {
    if (!this.isPlayerCurrentPlayer(player) || this.rollCount === 3) {
      console.log("Current player is currently: " + this.currentPlayer.name)
      console.log("'Player' is: " + player.name)
      return;
    }

    player.rollDice();
    this.rollCount++;
  }

  // Flips value of "isSaved" given player and diceIndex.
  flipIsSaved(player, diceIndex) {
    if (!this.isPlayerCurrentPlayer(player)) {
      return;
    }

    player.diceArray[diceIndex].flipIsSaved
  }

  /* Sets score for a given player and given section.
  * "section" is a string perfectly matching "onePair", "fullHouse" etc.
  */
  selectScore(player, section) {
    if (!this.isPlayerCurrentPlayer(player)) {
      return;
    }

    let points = 0;
    // Collects score from given section
    let possibleScores = this.getScores();
    points = possibleScores[section]

    if (player.updateScore(section, points)) { // Returns true only if score was changed
      player.resetDice();
      this.finishRound(); 
    }
  }
}

module.exports = Yatzy;