function handleClick() {
  const Dice = Array.from(document.getElementsByClassName("top"));
  Dice.forEach((element) => {
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
  });
}

function RollDiceButton() {
  return (
    <button className="rollDiceButton" onClick={handleClick}>
      {" "}
      Roll Dice{" "}
    </button>
  );
}

export default RollDiceButton;
