// IMPORT MODULES
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing styles
import "./styles/style.scss";

// IMPORT COMPONENTS
import Nav from "./components/Nav";

// IMPORT PAGES
import Home from "./pages/Home";
import GameDescription from "./pages/GameDescription";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameDescription />} />
      </Routes>
    </div>
  );
};

export default App;
