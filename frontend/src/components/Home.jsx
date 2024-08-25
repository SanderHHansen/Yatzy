import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  function createNewGame() {
    navigate("/createGame");
  }

  function joinExistingGame() {
    navigate("/joinGame");
  }

  return (
    <>
      <div className="container">
        <button onClick={createNewGame}> Create game </button>
        <button onClick={joinExistingGame}> Join existing game </button>
      </div>
    </>
  );
}

export default Home;
