import React from "react";
import "./StyleLogementCard.css";
import { Link } from "react-router-dom";

const CompLogementCard = ({ title, id }) => {
  return (
    <Link className="containerCard" to={`/logement/${id}`}>
      <h2>{title}</h2>
    </Link>
  );
};

export default CompLogementCard;
