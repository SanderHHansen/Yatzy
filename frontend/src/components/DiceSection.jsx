import dieImage from "../assets/die.png";
import "./Game.css";

function DiceSection() {
  return (
    <div className="section">
      <img src={dieImage} className="diceBottom" />
      <img src={dieImage} className="diceBottom" />
      <img src={dieImage} className="diceBottom" />
      <img src={dieImage} className="diceBottom" />
      <img src={dieImage} className="diceBottom" />
    </div>
  );
}

export default DiceSection;
