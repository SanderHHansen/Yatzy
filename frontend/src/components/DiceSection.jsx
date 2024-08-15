import Die from "./Die.jsx";

function DiceSection({ name, position }) {
  return (
    <div className={name}>
      <Die index="0" pos={position} />
      <Die index="1" pos={position} />
      <Die index="2" pos={position} />
      <Die index="3" pos={position} />
      <Die index="4" pos={position} />
    </div>
  );
}

export default DiceSection;
