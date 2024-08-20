import DiceSection from "./DiceSection.jsx";
import RollDiceButton from "./RollDiceButton.jsx";
import RollCounter from "./RollCounter.jsx";

function PlayArea() {
  return (
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
      <div className="rollContainer">
        <RollDiceButton />
        <div className="leftRollContainer">
          <p className="rollsLeftText">Rolls:</p>
          <RollCounter />
        </div>
      </div>
    </div>
  );
}

export default PlayArea;
