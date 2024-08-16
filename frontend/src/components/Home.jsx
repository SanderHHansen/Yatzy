import { useNavigate } from "react-router-dom";
import "./Home.css";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function Home() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/game");
  };

  function createNewGame() {
    socket.emit("createNewGame", "Sander");
  }

  // Rerouting to game-page:
  socket.on("redirect", (path) => {
    navigate(path);
  });

  return (
    <>
      <div className="buttons">
        <button onClick={createNewGame}> Create game </button>
        <button> Join game </button>
      </div>
      <button onClick={handleButtonClick}>
        {" "}
        Click heASDASDre to go to next page{" "}
      </button>
    </>
  );
}

export default Home;
