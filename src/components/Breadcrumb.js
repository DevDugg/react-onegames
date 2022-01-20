// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ linkTitles, linkTargets }) => {
  return (
    <div className="breadcrumb">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        {linkTitles.map((link, i) => {
          return (
            <li key={i}>
              <Link to={linkTargets[i]}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
