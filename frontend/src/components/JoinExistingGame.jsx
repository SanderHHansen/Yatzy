import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import socket from "./SocketFrontend.jsx";
import "./Home.css";

function JoinExistingGame() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gameId, setGameId] = useState("");
  const [toggle, setToggle] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    if (event.target.classList.contains("nameField")) {
      setName(event.target.value);
    }
    if (event.target.classList.contains("idField")) {
      setGameId(event.target.value);
    }
  };

  const clearText = (event) => {
    if (event.target.classList.contains("nameField")) {
      setName("");
    }
    if (event.target.classList.contains("idField")) {
      setGameId("");
    }
  };

  // Handling user pressing "enter"
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Checks if element has className "nameField"
      if (event.target.classList.contains("nameField")) {
        handleToggle();
        return;
      }

      // Checks if element has className "idField"
      if (event.target.classList.contains("idField")) {
        console.log("Name: " + name + "and gameId is: " + gameId);
        socket.emit("joinGame", gameId, name);
      }
    }
  };

  // For automatic selection of input-field when entering site.
  useEffect(() => {
    const inputField = document.querySelector(".nameField");
    if (inputField) {
      inputField.focus();
    }
  }, []);

  // For automatic selection of input-field after submitting name.
  useEffect(() => {
    const inputField = document.querySelector(".idField");
    if (inputField) {
      inputField.focus();
    }
  }, [toggle]);

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

  // Shows error message to user if games does not exist with given code.
  useEffect(() => {
    socket.on("GameDoesNotExist", (message) => {
      console.log("Trying to show message");
      setErrorMessage(message);

      // Removes message after 3s.
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    });

    return () => {
      socket.off("GameDoesNotExist");
    };
  }, []);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  return (
    <>
      {toggle && (
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
            className="inputTextField nameField"
          />
        </div>
      )}
      {!toggle && (
        <div className="container">
          <p className="topText">
            Type Room-ID: <br /> (Press enter to continue)
          </p>
          <input
            type="text"
            value={gameId}
            onChange={handleChange}
            onClick={clearText}
            onKeyDown={handleKeyDown}
            className="inputTextField idField"
          />
        </div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </>
  );
}

export default JoinExistingGame;
