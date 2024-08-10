import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Game from "./components/Game.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <Navbar />
      </div>

      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        // TODO: Legg inn alle Routes her
      </Routes>
    </>
  );
}

export default App;
