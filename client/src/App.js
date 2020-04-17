import React from "react";
import { Player } from "./components/Players";
import Navbar from "./components/NavBar";
import { useDarkMode } from "./components/UseDarkMode";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Player />
    </div>
  );
}

export default App;
