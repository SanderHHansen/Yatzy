import { useState, useEffect, useRef } from "react";
import { useGameDataContext } from "./GameData.jsx";
import { useScrambleContext } from "./ScrambleContext.jsx";
import "./Game.css";
import "./Die.css";

function Die({ index, pos }) {
  const { gameData: game } = useGameDataContext();
  const { scramble } = useScrambleContext();
  const [dieValue, setDieValue] = useState(
    game ? game.currentPlayer.diceArray[index].value : "",
  );

  const tempValueRef = useRef(dieValue);
  const dieRef = useRef(null);

  const isTop = pos === "top" && !game.currentPlayer.diceArray[index].isSaved;

  useEffect(() => {
    setDieValue(game ? game.currentPlayer.diceArray[index].value : "");
    tempValueRef.current = game
      ? game.currentPlayer.diceArray[index].value
      : "";
  }, [game]);

  // For listening to scramble-event
  useEffect(() => {
    const handleScramble = () => {
      if (!isTop) return;

      const element = dieRef.current;
      if (element) {
        element.textContent = "X";
        element.classList.remove("roll");
        void element.offsetWidth; // Forces reflow of object
        element.classList.add("roll");

        const scrambleInterval = setInterval(() => {
          element.textContent = Math.floor(Math.random() * 6) + 1;
        }, 100);

        setTimeout(() => {
          clearInterval(scrambleInterval);
          element.textContent = dieValue;
        }, 1100);

        return () => clearInterval(scrambleInterval); // Cleanup on unmount
      }
    };

    handleScramble();
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
