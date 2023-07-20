import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/logo_color.png";
import "./StyleHeader.css";

const CompHeader = () => {
  const location = useLocation();
  return (
    <div className="header_container">
      <img className="header_logo" src={logo} alt="Logo" />

      <nav>
        <ul>
          <li>
            <Link
              className={`nav-item ${
                location.pathname === "/" && "nav-item-actif"
              }`}
              to="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={`nav-item ${
                location.pathname === "/propos" && "nav-item-actif"
              }`}
              to="/propos"
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CompHeader;
