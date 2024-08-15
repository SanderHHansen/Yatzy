import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

// Creating context
const GameDataContext = createContext();
const gameId = GameDataContext.gameId;

function askForData() {
  socket.emit(`${gameId} HentData`, gameId);
}

export const GameDataContextProvider = ({ children }) => {
  const [gameData, setGameData] = useState(null);

  // TODO: Must change so that gameID is used to recover  game.
  // ! For testing. Importerer dummy.
  useEffect(() => {
    axios.get("http://localhost:3000/api/dummy-game").catch((error) => {
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
