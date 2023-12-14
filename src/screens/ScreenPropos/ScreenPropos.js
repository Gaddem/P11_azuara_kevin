import React from "react";
import BanerTitle from "../../components/BanerTitle/BanerTitle";
import CompDropDownList from "../../components/DropDown/CompDropDownList";
import "./StylePropos.css";
const ScreenPropos = () => {
  const contentsTextuels = [
    {
      title: "Fiabilité",
      contentTxt:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      contentTxt:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      contentTxt:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      contentTxt:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="flexColumnPropos">
      <BanerTitle type="propos" />
      <div className="listing">
        {contentsTextuels.map((itemPropos, i) => {
          return (
            <CompDropDownList
              title={itemPropos.title}
              content={itemPropos.contentTxt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScreenPropos;
