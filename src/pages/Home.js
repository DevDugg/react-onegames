// IMPORT MODULES
import React, { useState } from "react";
// Importing components
import Header from "../components/Header";
import Grid from "../components/Grid";

const Home = () => {

  const [grid, setGrid] = useState(true);

  return(
    <div className="container">
      <Header setGrid={setGrid} grid={grid}/>
      <Grid grid={grid} />
    </div>
  );
};

export default Home;
