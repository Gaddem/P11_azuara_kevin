import React from "react";
import "./StyleBanerTitle.css";

const BanerTitle = ({ title, type }) => {
  let srcImage = {
    home: require("../../img/main/main_img.png"),
    propos: require("../../img/propos/propos_img.png"),
  };

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${
      srcImage[`${type}`]
    })`,
    width:"100%"
  };
  return (
    <div style={containerStyle} className={`container ${ type==="propos" && "containerPropos"}`}>
      <h1>{title}</h1>
    </div>
  );
};

export default BanerTitle;
