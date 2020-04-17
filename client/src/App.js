import React from "react";
import { Player } from "./src/components/Players";
import Navbar from "./src/components/NavBar";
import { useDarkMode } from "./components/useDarkMode";

//import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Player />
    </div>
  );
}

export default App;
