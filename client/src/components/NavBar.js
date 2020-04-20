import React from "react";
import { useDarkMode } from "../components/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  return (
    <div style={{ background: "lightgray", width: "100%", height: 50 }}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </div>
  );
};

export default Navbar;
