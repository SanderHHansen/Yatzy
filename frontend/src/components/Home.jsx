import React from "react"
import Navbar from "./Navbar.jsx"

function Home() {
    return (
        <>
            <div className="header">
                <Navbar />
                <p>Hei! Du har kommet til home</p>
            </div>
        </>
    )
}

export default Home;