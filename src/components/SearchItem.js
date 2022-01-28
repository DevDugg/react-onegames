import React from "react";

const SearchItem = ({ title, img }) => {
    return (
        <div className="search-item">
            <div className="search-item-img">{img}</div>
            <h3 className="search-item-title">{title}</h3>
        </div>
    );
};

export default SearchItem;
