import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import socket from "./SocketFrontend.jsx";

function Home() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/game");
  };

  function createNewGame() {
    socket.emit("createNewGame", "Sander");
  }

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
    <>
      <div className="buttons">
        <button onClick={createNewGame}> Create game </button>
        <button> Join game </button>
      </div>
    </>
  );
}

export default Home;
