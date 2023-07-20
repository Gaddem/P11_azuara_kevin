import React from "react";
import "./ProfilStarsStyle.css";

const ProfilStarsComp = ({ profil_name, srcImg, rate = 0 }) => {
  const generateStars = (nbStars) => {
    const arrayEmpty = [1, 2, 3, 4, 5];

    return arrayEmpty.map((element, i) => {
      let route =
        i <= nbStars
          ? require("../../../img/icons/star-active.png")
          : require("../../../img/icons/star-inactive.png");
      return (
        <div className="oneStar" key={i}>
          <img
            className="starImg"
            src={route}
            alt={i <= nbStars ? "stars-active" : "stars-inactive"}
          />
        </div>
      );
    });
  };

  return (
    <div className="container_profilstars">
      <div className="hostContainer">
        <div className="hostContainerImg">
          <p className="textNameHost">{profil_name}</p>
          <img className="hostImg" src={srcImg} alt="host_image" />
        </div>
        <div className="containerStars">{generateStars(rate)}</div>
      </div>
    </div>
  );
};

export default ProfilStarsComp;
