import "./Game.css";
import { useGameDataContext } from "./GameData.jsx";

function CopyRoomIdButton() {
  const { gameData: game } = useGameDataContext();
  let gameIdString = "null";

  // Grabs first 3 letters of gameId
  if (game) {
    gameIdString = game.gameId.slice(0, 3).toUpperCase();
  }

  function handleClick() {
    try {
      navigator.clipboard.writeText(gameIdString);
    } catch (err) {
      console.error("Copying Room-ID failed");
    }
  }

  return (
    <button className="roomIdButton" onClick={handleClick}>
      Copy Room-ID: {gameIdString}
    </button>
  );
}

export default CopyRoomIdButton;
