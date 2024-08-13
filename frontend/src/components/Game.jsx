import Scoreboard from "./Scoreboard.jsx";
import YatzyBoard from "./YatzyBoard.jsx";
import "./Game.css";

function Game() {
  return (
    <div>
      <div className="mainContent">
        <div className="left-item">
          <Scoreboard />
        </div>
        <YatzyBoard />
        {/* <img src="https://images.creativefabrica.com/products/thumbnails/2023/12/14/gpxxeDvpx/2ZXrGUhczWQUhN8IturjytpPdYV.png" /> */}
      </div>
    </div>
  );
}

export default Game;
