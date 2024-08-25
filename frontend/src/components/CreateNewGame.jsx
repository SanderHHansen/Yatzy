import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import socket from "./SocketFrontend.jsx";
import "./Home.css";

function CreateNewGame() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const clearText = (event) => {
    setName("");
  };

  // Function to join game with desired nickname
  function createNewGame() {
    socket.emit("createNewGame", name);
  }

  // Handling user pressing "enter"
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      createNewGame();
      console.log("Enter was inputted");
    }
  };

  // For automatic selection input-field
  useEffect(() => {
    const inputField = document.querySelector(".inputTextField");
    if (inputField) {
      inputField.focus();
    }
  }, []);

  // Rerouting to game-page:
  useEffect(() => {
    const handleRedirect = (path) => {
      navigate(path);
    };

    socket.on("redirect", handleRedirect);

    // Cleanup listener on component unmount
    return () => {
      socket.off("redirect", handleRedirect);
    };
  }, [navigate]);

  return (
    <div className="container">
      <p className="topText">
        Type desired nickname: <br /> (Press enter to continue)
      </p>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        onClick={clearText}
        onKeyDown={handleKeyDown}
        className="inputTextField"
      />
    </div>
  );
}

export default CreateNewGame;
