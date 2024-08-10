import { useState } from 'react'
import './App.css'

// Components
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <Navbar />
      </div>
      <Home />
    </>
  )
}

export default App
