import React from "react";
import BanerTitle from "../../components/BanerTitle/BanerTitle";
import logements from "../../data/logements.json";
import CompLogementCard from "../../components/LogementCard/CompLogementCard";
import "./HomeStyle.css";

const ScreenHome = () => {
  return (
    <div>
      <BanerTitle title={"Chez vous, partout et ailleurs"} type={"home"} />
      <div className="containerGray">
        <div className="containerLogement">
          {logements.map((logement) => (
            <CompLogementCard
              key={logement.id}
              title={logement.title}
              id={logement.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreenHome;
