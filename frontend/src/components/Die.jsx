import "./Game.css";
import "./Die.css";
import { useGameDataContext } from "./GameData.jsx";

// TODO: Må fjernes etter hvert. Skal ikke ha noen funksjon.
function handleClick(event) {
  const element = event.currentTarget;

  // Start animation
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
}

function Die({ index, pos }) {
  const { gameData: game } = useGameDataContext();
  if (
    game &&
    pos === "top" &&
    game.currentPlayer.diceArray[index].isSaved === false
  ) {
    return (
      <div className={`die ${index} ${pos}`} onClick={handleClick}>
        {game ? `${game.currentPlayer.diceArray[index].value}` : "0"}
      </div>
    );
  }

  if (
    game &&
    pos === "bottom" &&
    game.currentPlayer.diceArray[index].isSaved === true
  ) {
    return (
      <div className={`die ${index} ${pos}`} onClick={handleClick}>
        {game ? `${game.currentPlayer.diceArray[index].value}` : "0"}
      </div>
    );
  }
}

export default Die;
