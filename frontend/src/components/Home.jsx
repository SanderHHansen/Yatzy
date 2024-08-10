import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  // For rerouting to Game
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/game");
  };

  return (
    <>
      <button onClick={handleButtonClick}>
        {" "}
        Click here to go to next page{" "}
      </button>
    </>
  );
}

export default Home;
