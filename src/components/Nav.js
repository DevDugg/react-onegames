import React, { useState } from "react";
import { Link } from "react-router-dom";
// Importing images
import search from "../icons/search.svg";

const Nav = () => {

  const [inputValue, setInputValue] = useState("")

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          OneGames
        </Link>

        <div className="search">
          <img src={search} alt="search" />
          <input className="sear-input" type="text" placeholder="Search" onChange={e => setInputValue(e.target.value)}/>

          {inputValue && (
              <div className="search-blok">

                <div className="search-item">
                  <div className="search-item-img">
                    {/* <img src={game} alt="game" /> */}
                  </div>
                  <h3 className="search-item-title">
                    Ghost of Tsushima Director's Cut
                  </h3>
                </div>

                <div className="search-item">
                  <div className="search-item-img">
                    {/* <img src={game} alt="game" /> */}
                  </div>
                  <h3 className="search-item-title">
                    Ghost of Tsushima Director's Cut
                  </h3>
                </div>
                
                <div className="search-item">
                  <div className="search-item-img">
                    {/* <img src={game} alt="game" /> */}
                  </div>
                  <h3 className="search-item-title">
                    Ghost of Tsushima Director's Cut
                  </h3>
                </div>

              </div>
            )
          }

        </div>

        <Link className="nav-link" to="/about">
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
