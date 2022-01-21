import React from "react";

const GridItem = ({img, title, rating}) => {
    return(
        <div className="grid-item">
            <div className="grid-item-img">
                <img src={img} alt={title} />
            </div>
            <div className="grid-item-desc">
                <h3 className="grid-item-title">{title}</h3>
                <div className="grid-item-score">{rating}</div>
            </div>
        </div>
    );
}

export default GridItem;