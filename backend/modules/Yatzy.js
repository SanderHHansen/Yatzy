const Player = require("./Player.js");

class Yatzy {
  constructor(host) {
    this.host = host; // Person who created the lobby.
    this.playerArray = [host]; // Array with all the players.
    this.currentPlayer = null; // The player whos turn it is
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
    this.playerArray.forEach(player => {
      if (player.roundsPlayed === lowestRoundsPlayed) {
        this.currentPlayer = player;
        return;
      }
    })
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
    this.playerArray.forEach(player => {
      if (player.roundsPlayed != 15) {
        this.changeCurrentPlayer();
        return;
      }
    })

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
    if (!isPlayerCurrentPlayer || rollCount === 3) {
      return;
    }

    player.rollDice();
    rollCount++;
  }

  // Flips value of "isSaved" given player and diceIndex.
  flipIsSaved(player, diceIndex) {
    if (!isPlayerCurrentPlayer) {
      return;
    }

    player.diceArray[diceIndex].flipIsSaved
  }

  /* Sets score for a given player and given section.
  * "section" is a string perfectly matching "onePair", "fullHouse" etc.
  */
  selectScore(player, section) {
    if (!isPlayerCurrentPlayer) {
      return;
    }

    let points = 0;
    // Collects score from given section
    possibleScores = this.getScores();
    points = possibleScores[section]

    if (player.updateScore(section, points)) { // Returns true only if score was changed
      this.finishRound(); 
    }
  }
}

module.exports = Yatzy;