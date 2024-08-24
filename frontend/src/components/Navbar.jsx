import { useNavigate, useLocation } from "react-router-dom";
import CopyRoomIdButton from "./CopyRoomIdButton.jsx";
import "./Navbar.css";

export default function Navbar() {
  // For navigation home
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  // For checking if user is on /game.
  const location = useLocation();
  const isGameSite = location.pathname === "/game";

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

      {/* Shows CopyRoomIdButton if user is on /game */}
      {isGameSite && <CopyRoomIdButton />}
    </nav>
  );
}
