import DiceSection from "./DiceSection.jsx";

function PlayArea() {
  return (
    <>
      <div className="boardContainer">
        <div className="board"></div>
        <div className="boardBottom">
          <p className="keepText"> Dice to keep </p>
          <div className="dices">
            <DiceSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayArea;
