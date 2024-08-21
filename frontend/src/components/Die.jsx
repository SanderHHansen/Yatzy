import { useState, useEffect, useRef } from "react";
import { useGameDataContext } from "./GameData.jsx";
import { useScrambleContext } from "./ScrambleContext.jsx";
import "./Game.css";
import "./Die.css";

function Die({ index, pos }) {
  const { gameData: game } = useGameDataContext();
  const { scramble } = useScrambleContext();
  const [dieValue, setDieValue] = useState(
    game ? game.currentPlayer.diceArray[index].value : "Feil",
  );

  // References to die.
  const dieRef = useRef(null);
  const dieValueRef = useRef(dieValue);

  const isTop = pos === "top" && !game.currentPlayer.diceArray[index].isSaved;

  // Updating dieValue every time updated game-data arrives.
  useEffect(() => {
    setDieValue(game ? game.currentPlayer.diceArray[index].value : "");
    dieValueRef.current = dieValue;
  }, [game]);

  useEffect(() => {
    dieValueRef.current = dieValue;
  }, [dieValue]);

  // For listening to scramble-event
  useEffect(() => {
    // Checks if dice is in top section.
    if (!isTop) return;
    const element = dieRef.current;

    // Block for visual scrambling of dice
    if (element) {
      element.classList.remove("roll");
      void element.offsetWidth; // Forces reflow of object
      element.classList.add("roll");

      // Visually scrambles dice.
      const scrambleInterval = setInterval(() => {
        element.textContent = Math.floor(Math.random() * 6) + 1;
      }, 100);

      setTimeout(() => {
        clearInterval(scrambleInterval);
        // Sets value of die back to real value (dieValue);
        element.textContent = dieValueRef.current;
      }, 1100);

      return () => clearInterval(scrambleInterval); // Cleanup on unmount
    }
  }, [scramble]);

  // Returns shown dice
  if (
    game &&
    pos === "top" &&
    game.currentPlayer.diceArray[index].isSaved === false
  ) {
    return (
      <div className={`die ${index} ${pos}`} ref={dieRef}>
        {game ? `${dieValue}` : "0"}
      </div>
    );
  }

  if (
    game &&
    pos === "bottom" &&
    game.currentPlayer.diceArray[index].isSaved === true
  ) {
    return (
      <div className={`die ${index} ${pos}`} ref={dieRef}>
        {game ? `${dieValue}` : "0"}
      </div>
    );
  }
}

export default Die;
