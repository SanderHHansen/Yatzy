import { createContext, useContext, useState } from "react";
import socket from "./SocketFrontend.jsx";

// Creating context.
const ScrambleContext = createContext();

export const ScrambleContextProvider = ({ children }) => {
  const [scramble, setScramble] = useState(0);

  socket.on("Scramble", () => {
    setScramble((prev) => prev + 1);
  });

  return (
    <ScrambleContext.Provider value={{ scramble, setScramble }}>
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
