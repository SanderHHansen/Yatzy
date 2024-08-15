import "./Game.css";
import "./Terning.css";
import { useGameDataContext } from "./GameData.jsx";

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

function Die({ extraClass, pos }) {
  const game = useGameDataContext();
  return (
    <div className={`die ${extraClass} ${pos}`} onClick={handleClick}>
      {game ? `${game.currentPlayer.diceArray[0].value}` : "0"}
    </div>
  );
}

export default Die;
