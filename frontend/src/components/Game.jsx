import Scoreboard from "./Scoreboard.jsx";
import PlayArea from "./PlayArea.jsx";
import "./Game.css";

function Game() {
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
