import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Creating context
const GameDataContext = createContext();

export const GameDataContextProvider = ({ children }) => {
  const [gameData, setGameData] = useState(null);

  // ! For testing. Importerer dummy.
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/dummy-game")
      .then((response) => {
        setGameData(response.data);
      })
      .catch((error) => {
        console.error("Couldn't fetch file", error);
      });
  }, []);
  // ! Slutt testing.

  return (
    <GameDataContext.Provider value={gameData}>
      {children}
    </GameDataContext.Provider>
  );
};

export const useGameDataContext = () => useContext(GameDataContext);
