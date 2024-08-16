// import io from "socket.io";
import { useGameDataContext } from "./GameData.jsx";

function RollDiceButton() {
  const { playerId, gameData } = useGameDataContext();

  function handleClick() {
    // Checks if player is allowed to act
    if (playerId !== gameData.currentPlayer.playerId) {
      return; // Returns early if player isn't current player.
    }

    const Dice = Array.from(document.getElementsByClassName("top"));

    Dice.forEach((element) => {
      // Starts animation
      element.classList.remove("roll");
      void element.offsetWidth; // Forces reflow of object
      element.classList.add("roll");

      // Visually scrambles dice
      const scrambling = setInterval(() => {
        element.textContent = Math.floor(Math.random() * 6) + 1;
      }, 100);

      // Stops scrambling of dice after given ms.
      setTimeout(() => {
        clearInterval(scrambling);
      }, 1100);
    });
  }

  return (
    <button className="rollDiceButton" onClick={handleClick}>
      {" "}
      Roll Dice{" "}
    </button>
  );
}

export default RollDiceButton;
