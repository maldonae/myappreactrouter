import { useState } from "react";
import { Link } from "react-router-dom";

import "./App.css";

// page components

import Home from "./pages/Home";
import About from "./pages/About";

// the App

function App() {
  const [currentLocation, setCurrentLocation] = useState("/");

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <button onClick={() => setCurrentLocation("/")} type="button">
          Home
        </button>
        <button onClick={() => setCurrentLocation("/about")} type="button">
          About
        </button>
      </nav>
      <main>
        {currentLocation === "/" && <Home />}
        {currentLocation === "/about" && <About />}
      </main>
    </>
  );
}

export default App;
