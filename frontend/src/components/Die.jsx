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

  const dieRef = useRef(null);

  const isTop = pos === "top" && !game.currentPlayer.diceArray[index].isSaved;

  useEffect(() => {
    setDieValue(game ? game.currentPlayer.diceArray[index].value : "");
  }, [game]);

  // For listening to scramble-event
  useEffect(() => {
    const handleScramble = () => {
      if (!isTop) return;

      if (element) {
        const element = dieRef.current;
        element.classList.remove("roll");
        void element.offsetWidth; // Forces reflow of object
        element.classList.add("roll");

        const scrambleInterval = setInterval(() => {
          element.textContent = Math.floor(Math.random() * 6) + 1;
        }, 100);

        setTimeout(() => {
          clearInterval(scrambleInterval);
          setDieValue(game ? game.currentPlayer.diceArray[index].value : "");
        }, 1100);

        return () => clearInterval(scrambleInterval); // Cleanup on unmount
      }
    };
  }, [scramble]);

  if (game) {
    return (
      <div className={`die ${index} ${pos}`} ref={dieRef}>
        {dieValue}
      </div>
    );
  }
}

export default Die;
