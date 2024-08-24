import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { GameDataContextProvider } from "./components/GameData.jsx";
import { ScrambleContextProvider } from "./components/ScrambleContext.jsx";

// Components
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Game from "./components/Game.jsx";
import JoinExistingGame from "./components/JoinExistingGame.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ScrambleContextProvider>
      <GameDataContextProvider>
        {/* Navbar on top of page */}
        <div className="header">
          <Navbar />
        </div>

        {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/joinGame" element={<JoinExistingGame />} />
        </Routes>
      </GameDataContextProvider>
    </ScrambleContextProvider>
  );
}

export default App;
