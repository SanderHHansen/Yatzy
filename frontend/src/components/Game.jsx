import React from "react";
import Scoreboard from "./Scoreboard.jsx";
import "./Game.css";

function Game() {
  return (
    <>
      <h1> Spill-side!</h1>
      <div className="playArea">
        <Scoreboard />
        <img src="https://images.creativefabrica.com/products/thumbnails/2023/12/14/gpxxeDvpx/2ZXrGUhczWQUhN8IturjytpPdYV.png" />
      </div>
    </>
  );
}

export default Game;
