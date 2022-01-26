// IMPORT MODULES
import React, { useState, useEffect } from "react";
// Importing components
import Header from "../components/Header";
import Grid from "../components/Grid";

const Home = () => {
  const [grid, setGrid] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <Header setGrid={setGrid} grid={grid} />
      <Grid grid={grid} />
    </div>
  );
};

export default Home;
