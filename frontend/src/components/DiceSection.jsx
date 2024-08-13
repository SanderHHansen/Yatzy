import dieImage from "../assets/die.png";
import "./Game.css";

function DiceSection() {
  return (
    <div className="dice">
      <img src={dieImage} className="die" />
      <img src={dieImage} className="die" />
      <img src={dieImage} className="die" />
      <img src={dieImage} className="die" />
      <img src={dieImage} className="die" />
    </div>
  );
}

export default DiceSection;
