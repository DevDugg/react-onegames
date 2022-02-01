import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Importing components
import { auth } from "../auth";
import search from "../icons/search.svg";

const Nav = () => {
  // API
  const [apiData, setApiData] = useState();
  const [gameName, setGameName] = useState();

  // Base link
  const base_url = "https://api.rawg.io/api/";

  // Key
  const authKey = auth;

  useEffect(() => {
    const fetchData = (url) => {
      axios
        .get(`${base_url}games?key=${authKey}&search=${url}`)
        .then((data) => {
          setApiData(data.data.results);
        });
    };

    fetchData(gameName);
  }, [gameName, authKey]);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          OneGames
        </Link>

        <div className="search">
          <img src={search} alt="search" />
          <input
            className="sear-input"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setTimeout(() => {
                setGameName(e.target.value);
              }, 2000);
            }}
          />

          {gameName && (
            <div className="search-blok">
              {gameName !== ""
                ? apiData
                  ? apiData.map((item, i) => {
                      return (
                        <Link
                          onClick={() => setGameName("")}
                          to={`/game/${item.slug}`}
                          className="search-item"
                          key={i}
                        >
                          <div
                            className="search-item-img"
                            style={{
                              backgroundImage: `url(${item.background_image})`,
                              backgroundPosition: "center",
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                          <h3 className="search-item-title">{item.name}</h3>
                        </Link>
                      );
                    })
                  : ""
                : ""}
            </div>
          )}
        </div>

        <Link className="nav-link" to="/about">
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
