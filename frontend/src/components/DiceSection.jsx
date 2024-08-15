import dieImage from "../assets/die.png";
import "./Game.css";
import "./Terning.css";

function DiceSection({ name }) {
  function handleClick(event) {
    const element = event.currentTarget;

    // Start animation
    element.classList.remove("roll");
    void element.offsetWidth; // Forces reflow of object
    element.classList.add("roll");

    // Visually scrambles dice
    const scrambling = setInterval(() => {
      element.textContent = Math.floor(Math.random() * 6) + 1;
    }, 100);

    // Stops scrambling of dice after given ms.
    setTimeout(() => {
      clearInterval(scrambling);
    }, 1100);
  }

  function Die({ extraClass }) {
    return (
      <div className={`die ${extraClass}`} onClick={handleClick}>
        5
      </div>
    );
  }

  return (
    <div className={name}>
      <Die extraClass="die1" />
      <Die extraClass="die2" />
      <Die extraClass="die3" />
      <Die extraClass="die4" />
      <Die extraClass="die5" />
    </div>
  );
}

export default DiceSection;
