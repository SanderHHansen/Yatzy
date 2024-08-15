import DiceSection from "./DiceSection.jsx";

function PlayArea() {
  return (
    <>
      <div className="rightContainer">
        <div className="boardContainer">
          <div className="board">
            <DiceSection name="diceTopSection" />
          </div>
          <div className="boardBottom">
            <p className="keepText"> Dice to keep </p>
            <div>
              <DiceSection name="diceBottomSection" />
            </div>
          </div>
        </div>
        <button className="rollDiceButton"> Roll Dice </button>
      </div>
    </>
  );
}

export default PlayArea;
