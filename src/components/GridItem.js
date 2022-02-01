import React from "react";
import { Link } from "react-router-dom";

const GridItem = ({ img, title, rating, url }) => {
  return (
    <Link to={"/game/" + url}>
      <div className="grid-item">
        <div className="grid-item-img">
          <img src={img} alt={title} />
        </div>
        <div className="grid-item-desc">
          <h3 className="grid-item-title">{title}</h3>
          {rating && (
            <div
              className={
                rating >= 75
                  ? "grid-item-score score-high"
                  : 50 < rating < 75
                  ? "grid-item-score score-mid"
                  : "grid-item-score score-low"
              }
            >
              {rating}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default GridItem;
