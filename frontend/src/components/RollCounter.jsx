import { useGameDataContext } from "./GameData";

function RollCounter() {
  const { gameData: game } = useGameDataContext();

  return (
    <div className="rollCounter">
      <div
        className={`roll1 countElement ${game && game.rollCount >= 1 ? "filled" : ""}`}
      ></div>
      <div
        className={`roll2 countElement ${game && game.rollCount >= 2 ? "filled" : ""}`}
      ></div>
      <div
        className={`roll3 countElement ${game && game.rollCount >= 3 ? "filled" : ""}`}
      ></div>
    </div>
  );
}

export default RollCounter;
