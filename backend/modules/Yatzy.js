const Player = require("./Player.js");
const { v4: uuidv4 } = require("uuid");

class Yatzy {
  constructor(host) {
    this.gameId = uuidv4();
    this.host = host; // Person who created the lobby.
    this.playerArray = [host]; // Array with all the players.
    this.currentPlayer = host; // The player whos turn it is
    this.rollCount = 0; // Keep track of number of throws current player has done
    this.scoresPossible = this.getScores();

    // Manually sets dice of first player. Setup for website.
    this.playerArray[0].diceArray.forEach((die) => {
      die.isSaved = false;
      die.value = 0;
    });
  }

  addPlayerToGame(newPlayer) {
    this.playerArray.push(newPlayer);
  }

  removePlayerFromGame(playerId) {
    // If playerId is null
    if (!playerId) {
      console.log("PlayerID didn't exist. No player removed from game.");
      return;
    }

    this.playerArray = this.playerArray.filter(
      (player) => player.playerId !== playerId
    );
    console.log(
      "Player with playerID: " + playerId + " removed from game (Yatzy)"
    );

    // Updates currentPlayer in case player removed was currentPlayer.
    this.changeCurrentPlayer();
  }

  /* Checks playercount of every player. Updates currentPlayer to the one that has the least rounds played,
   * and who is at the lowest index in players-array.
   */
  changeCurrentPlayer() {
    // Finds lowest rounds played
    let lowestRoundsPlayed = Infinity;
    this.playerArray.forEach((player) => {
      if (player.roundsPlayed < lowestRoundsPlayed) {
        lowestRoundsPlayed = player.roundsPlayed;
      }
    });

    // Updates current player
    for (let i = 0; i < this.playerArray.length; i++) {
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

  // Retrieves scoreboard for a given player
  getScoreboard(player) {
    return player.getScoreboard();
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

  /* Returns Player that matches playerId given */
  getPlayerByPlayerId(playerId) {
    for (let i = 0; i < this.playerArray.length; i++) {
      let player = this.playerArray[i];
      if (player.playerId === playerId) {
        return player;
      }
    }
    console.log("Couldn't find player byt this playerId.");
    return null;
  }

  // Logic for what happens after player finished round.
  finishRound() {
    // Resets rollCount
    this.rollCount = 0;

    // Checks if game is finished (All player have 15 rounds played).
    for (let i = 0; i < this.playerArray.length; i++) {
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
      console.log("Current player is currently: " + this.currentPlayer.name);
      console.log("'Player' is: " + player.name);
      return;
    }

    this.currentPlayer.rollDice();
    this.rollCount++;
    this.updateGameData();
  }

  // Flips value of "isSaved" given player and diceIndex.
  flipIsSaved(player, diceIndex) {
    if (this.rollCount === 0) {
      return;
    }

    if (!this.isPlayerCurrentPlayer(player)) {
      return;
    }

    this.currentPlayer.diceArray[diceIndex].flipIsSaved();
  }

  /* Sets score for a given player and given section.
   * "section" is a string perfectly matching "onePair", "fullHouse" etc.
   */
  selectScore(player, section) {
    if (!this.isPlayerCurrentPlayer(player) && rollCount != 0) {
      return;
    }

    let points = 0;
    // Collects score from given section
    let possibleScores = this.getScores();
    points = possibleScores[section];

    if (player.updateScore(section, points)) {
      // Returns true only if score was changed
      player.resetDice();
      this.updateGameData(); // Oppdaterer gamedata
      this.finishRound();
    }
  }

  /* Returns if game is still on round 1.
   *  Returns "true" as long as one player exists who hasn't finished round 1.
   */
  isGameStillOnRoundOne() {
    // Returns true if playerArray is empty.
    if (this.playerArray.length === 0) {
      return true;
    }

    const stillOnRoundOne = this.playerArray.some((player) => {
      if (player.roundsPlayed === 0) {
        return true;
      }
      return false;
    });

    if (stillOnRoundOne) {
      return true;
    }

    return false;
  }

  // Updates all scoreboards for all players without changing anything.
  updateGameData() {
    this.playerArray.forEach((player) => {
      player.updateScoreboardNoChanges();
    });

    // Updates scoresPossible
    this.scoresPossible = this.getScores();
  }
}

module.exports = Yatzy;
