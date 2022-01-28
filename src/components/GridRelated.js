import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { auth } from "../auth";

// Importing components
import GridItem from "./GridItem";

const GridRelated = ({ grid, param }) => {
  const [data, setData] = useState();
  const authKey = auth;
  useEffect(() => {
    const makeRequest = (url) => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    makeRequest(
      `https://api.rawg.io/api/games/${param.id}/suggested?key=${authKey}`
    );
  }, []);
  return (
    <div className={grid ? "grid" : "vertical"}>
      <div className="row">
        {data
          ? data.map((item, i) => {
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

export default GridRelated;
