import { createContext, useContext, useState } from "react";

// Creating context.
const ScrambleContext = createContext();

export const ScrambleContextProvider = ({ children }) => {
  const [scramble, setScramble] = useState(0);

  return (
    <ScrambleContext.Provider value={{ scramble, setScramble }}>
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
