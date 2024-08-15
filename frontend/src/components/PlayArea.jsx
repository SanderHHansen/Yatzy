import DiceSection from "./DiceSection.jsx";

function PlayArea() {
  return (
    <>
      <div className="rightContainer">
        <div className="boardContainer">
          <div className="board">
            <DiceSection name="diceTopSection" position="top" />
          </div>
          <div className="boardBottom">
            <p className="keepText"> Dice to keep </p>
            <div>
              <DiceSection name="diceBottomSection" position="bottom" />
            </div>
          </div>
        </div>
        <button className="rollDiceButton"> Roll Dice </button>
      </div>
    </>
  );
}

export default PlayArea;
