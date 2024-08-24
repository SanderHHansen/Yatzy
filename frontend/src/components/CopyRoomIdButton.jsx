import "./Game.css";
import { useGameDataContext } from "./GameData.jsx";

function CopyRoomIdButton() {
  const { gameData: game } = useGameDataContext();

  function handleClick() {
    try {
      navigator.clipboard.writeText(gameIdString);
    } catch (err) {
      console.error("Copying Room-ID failed");
    }
  }

  // Grabs first 3 letters of gameId
  const gameIdString = game.gameId.slice(0, 3).toUpperCase();
  return (
    <button className="roomIdButton" onClick={handleClick}>
      Copy Room-ID: {gameIdString}
    </button>
  );
}

export default CopyRoomIdButton;
