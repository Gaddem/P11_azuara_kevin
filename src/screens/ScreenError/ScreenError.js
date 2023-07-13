import React from "react";
import { Link } from "react-router-dom";
import "./ErrorStyle.css";

const ScreenError = () => {
  return (
    <div className="containerError">
      <p className="bigTitleError">404</p>
      <p className="subTitleError">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="subLinkError" to="/">
        <p>Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
};

export default ScreenError;
