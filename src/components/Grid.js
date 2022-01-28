import React, { useState, useEffect } from "react";
import axios from "axios";
// Importing images
import death from "../images/death.png";
import ghost from "../images/ghost.png";
import last from "../images/last.png";
import sekiro from "../images/sekiro.png";
// Importing components
import GridItem from "./GridItem";

const Grid = ({ grid, data, isLoaded }) => {
    return (
        <div className={grid ? "grid" : "vertical"}>
            {/* {data && (
                data.map(item => <GridItem img={item.background_image} title={item.name} rating={item.metacritic} />)
            )} */}
            <div className="column">
                {isLoaded[0]
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
                {isLoaded[1]
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
                {isLoaded[2]
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
                {isLoaded[3]
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
