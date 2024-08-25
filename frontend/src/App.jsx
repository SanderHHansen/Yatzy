import { Routes, Route } from "react-router-dom";
import { GameDataContextProvider } from "./components/GameData.jsx";
import { ScrambleContextProvider } from "./components/ScrambleContext.jsx";
import "./App.css";

// Components
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Game from "./components/Game.jsx";
import JoinExistingGame from "./components/JoinExistingGame.jsx";
import CreateNewGame from "./components/CreateNewGame.jsx";

function App() {
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
          <Route path="/createGame" element={<CreateNewGame />} />
        </Routes>
      </GameDataContextProvider>
    </ScrambleContextProvider>
  );
}

export default App;
