import React from "react";
import { Link } from "react-router-dom";
// Importing images
import search from "../images/search.svg";

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo">OneGames</Link>
                <div className="nav-menu">
                    <div className="search">
                        <img src={search} alt="search" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <Link className="nav-link" to="/about">ABOUT</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;