import React from "react";

// Importing components
import GridItem from "./GridItem";

const Grid = ({ grid, data }) => {
  return (
    <div className={grid ? "grid" : "vertical"}>
      {/* {data && (
                data.map(item => <GridItem img={item.background_image} title={item.name} rating={item.metacritic} />)
            )} */}
      <div className="column">
        {data[0]
          ? data[0].map((item, i) => {
              return (
                <GridItem
                  img={item.background_image}
                  title={item.name}
                  rating={item.metacritic}
                  key={i}
                  url={item.slug}
                />
              );
            })
          : ""}
      </div>

      <div className="column">
        {data[1]
          ? data[1].map((item, i) => {
              return (
                <GridItem
                  img={item.background_image}
                  title={item.name}
                  rating={item.metacritic}
                  key={i}
                  url={item.slug}
                />
              );
            })
          : ""}
      </div>

      <div className="column">
        {data[2]
          ? data[2].map((item, i) => {
              return (
                <GridItem
                  img={item.background_image}
                  title={item.name}
                  rating={item.metacritic}
                  key={i}
                  url={item.slug}
                />
              );
            })
          : ""}
      </div>

      <div className="column">
        {data[3]
          ? data[3].map((item, i) => {
              return (
                <GridItem
                  img={item.background_image}
                  title={item.name}
                  rating={item.metacritic}
                  key={i}
                  url={item.slug}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Grid;
