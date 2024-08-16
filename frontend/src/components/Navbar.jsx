import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  // For navigation home
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/512/1804/1804046.png"
        onClick={navigateHome}
      />
      <h1 className="title" onClick={navigateHome}>
        {" "}
        Yatzy
      </h1>
      <button>Leaderboard</button>
      <button>About</button>
    </nav>
  );
}
