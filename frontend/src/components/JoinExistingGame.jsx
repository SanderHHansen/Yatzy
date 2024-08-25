import { useState, useEffect } from "react";
import "./Home.css";

function JoinExistingGame() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const clearText = (event) => {
    setText("");
  };

  // For automatic selection of type room-ID
  useEffect(() => {
    const inputField = document.querySelector(".inputTextField");
    if (inputField) {
      inputField.focus();
    }
  }, []);

  function joinGameWithId() {}

  return (
    <div className="container">
      <button onClick={joinGameWithId}>Join game with Room-ID</button>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onClick={clearText}
        className="inputTextField"
      />
    </div>
  );
}

export default JoinExistingGame;
