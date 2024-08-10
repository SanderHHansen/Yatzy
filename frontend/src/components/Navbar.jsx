import { useState} from "react"
import "./Navbar.css"

export default function Navbar() {
  return(
    <nav className="navbar">
      <img className= "logo" src="https://cdn-icons-png.flaticon.com/512/1804/1804046.png"/>
      <h1 className = "title"> Welcome to Yatzy!</h1>
      <button>Create game</button>
      <button>Join game</button>
    </nav>
  )
}