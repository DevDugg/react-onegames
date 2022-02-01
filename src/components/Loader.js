// IMPORT MODULES
import React from "react";

// IMPORT IMAGES
import gif from "../icons/load.gif";

const Loader = ({ width, height }) => {
  return (
    <div className="loader" style={{ width: width, height: height }}>
      <img src={gif} alt="gif" />
    </div>
  );
};

export default Loader;
