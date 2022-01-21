// IMPORT MODULES
import React from "react";
// Importing images
import fire from "../images/fire.svg";
import { ReactComponent as Dgrid1 } from '../images/d-grid1.svg';
import { ReactComponent as Dgrid2 } from '../images/d-grid2.svg';


const Header = ( { grid, setGrid } ) => {
    return (
        <header className="header">
            <div className="title-box">
                <h2 className="title">HOT</h2>
                <img src={fire} alt="fire" />
            </div>
            <div className="d-options">
                <h4 className="d-title">Display Options:</h4>
                <Dgrid1 className={`d-grid1 ${grid ? "active" : ""}`} onClick={() => setGrid(true)} />
                <Dgrid2 className={`d-grid2 ${!grid ? "active" : ""}`} onClick={() => setGrid(false)} />
            </div>
        </header>
    );
}

export default Header;