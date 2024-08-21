// import io from "socket.io";
import { useGameDataContext } from "./GameData.jsx";
import { useScrambleContext } from "./ScrambleContext.jsx";
import socket from "./SocketFrontend.jsx";

function RollDiceButton() {
  const { playerId, gameData } = useGameDataContext();
  const { setScramble } = useScrambleContext();

  function handleClick() {
    // Checks if game exists, or if currentPlayer has rolled 3 times already.
    if (!gameData || gameData.rollCount === 3) {
      return;
    }

    // Checks if player is allowed to act
    if (playerId !== gameData.currentPlayer.playerId) {
      return; // Returns early if player isn't current player.
    }

    // Sends operation to backend.
    socket.emit("rollDice");

    // Calls for scramble-animation to happen in frontend.
    setScramble((prev) => prev + 1);
  }

  return (
    <>
      <button className="rollDiceButton" onClick={handleClick}>
        {" "}
        Roll Dice{" "}
      </button>
    </>
  );
}

export default RollDiceButton;
