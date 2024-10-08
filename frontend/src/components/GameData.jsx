import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import socket from "./SocketFrontend.jsx";

// Creating context
const GameDataContext = createContext();

// TODO Add correct socket joining later.

export const GameDataContextProvider = ({ children }) => {
  const [gameData, setGameData] = useState(null);
  const [playerId, setPlayerId] = useState(null);

  // TODO: Must change so that gameID is used to get game.
  // ! For testing. Creates and joins dummy-game.
  // useEffect(() => {
  //   axios.get("http://localhost:3000/api/dummy-game").catch((error) => {
  //     console.error("Couldn't fetch file", error);
  //   });
  //   socket.emit("joinGame", "testId");

  // }, []);
  // ! Slutt testing.
  socket.on("gameUpdate", (data) => {
    setGameData(data);
    console.log("Data har blitt satt!");
  });

  socket.on("playerId", (playerId) => {
    setPlayerId(playerId);
    console.log("PlayerId has been set.");
  });

  return (
    <GameDataContext.Provider value={{ gameData, playerId }}>
      {children}
    </GameDataContext.Provider>
  );
};

export const useGameDataContext = () => useContext(GameDataContext);
