// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Breadcrumb";

const GameDescription = () => {
  return (
    <section className="game-desc">
      <div className="bg"></div>
      <div className="container">
        <div className="game-desc-inner">
          <Breadcrumb
            linkTitles={["the last of us part ||"]}
            linkTargets={["/game"]}
          />
        </div>
      </div>
    </section>
  );
};

export default GameDescription;
