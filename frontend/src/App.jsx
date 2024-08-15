import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  GameDataContextProvider,
  useGameDataContext,
} from "./components/GameData.jsx";

// Components
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Game from "./components/Game.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <GameDataContextProvider>
      {/* Navbar on top of page */}
      <div className="header">
        <Navbar />
      </div>

      {/* Main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        // TODO: Legg inn alle Routes her
      </Routes>
    </GameDataContextProvider>
  );
}

export default App;
