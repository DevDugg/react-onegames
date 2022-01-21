import React from "react";
import { Link } from "react-router-dom";

const GridItem = ({ img, title, rating }) => {
  return (
    <Link to="/game">
      <div className="grid-item">
        <div className="grid-item-img">
          <img src={img} alt={title} />
        </div>
        <div className="grid-item-desc">
          <h3 className="grid-item-title">{title}</h3>
          <div className="grid-item-score">{rating}</div>
        </div>
      </div>
    </Link>
  );
};

export default GridItem;
