import DiceSection from "./DiceSection.jsx";
import RollDiceButton from "./RollDiceButton.jsx";

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
        <div className="rollContainer">
          <RollDiceButton className="rollBtn" />
          <div className="rollCounter">
            <button>Container1</button>
            <button>Container2</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayArea;
