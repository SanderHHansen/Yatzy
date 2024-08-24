import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGameDataContext } from "./GameData.jsx";
import Scoreboard from "./Scoreboard.jsx";
import PlayArea from "./PlayArea.jsx";
import CopyRoomIdButton from "./CopyRoomIdButton.jsx";
import "./Game.css";

function Game() {
  // Reroutes to index if "gameData" is not available.
  const { gameData } = useGameDataContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!gameData) {
      navigate("/");
    }
  }, [gameData, navigate]);

  if (!gameData) {
    return null; // Eller en loading spinner mens du venter på redirect
  }

  return (
    <div>
      <div className="mainContent">
        <div className="left-item">
          <Scoreboard />
        </div>
        <div className="right-item">
          <PlayArea />
        </div>
      </div>
    </div>
  );
}

export default Game;
