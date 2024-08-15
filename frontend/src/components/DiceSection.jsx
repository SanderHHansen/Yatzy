import Die from "./Die.jsx";

function DiceSection({ name, position }) {
  return (
    <div className={name}>
      <Die extraClass="die1" pos={position} />
      <Die extraClass="die2" pos={position} />
      <Die extraClass="die3" pos={position} />
      <Die extraClass="die4" pos={position} />
      <Die extraClass="die5" pos={position} />
    </div>
  );
}

export default DiceSection;
