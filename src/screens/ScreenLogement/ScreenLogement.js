import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./StyleLogement.css";
import logements from "../../data/logements.json";
import CompDropDownList from "../../components/DropDown/CompDropDownList";
import CompCarrousel from "../../components/Carrousel/CompCarrousel";
import TitlesTagsComp from "../../components/InLogement/Titles_Tags/TitlesTagsComp";
import ProfilStarsComp from "../../components/InLogement/Profil_Stars/ProfilStarsComp";

const ScreenLogement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [logementActif, setLogementActif] = useState({});
  const [equipText, setEquipText] = useState("");

  useEffect(() => {
    const logementFind = logements.filter((logement) => logement.id === id);
    if (logementFind.length > 0) {
      setLogementActif(logementFind[0]);
      let contentText = "";
      for (let index = 0; index < logementFind[0].equipments.length; index++) {
        const equip = logementFind[0].equipments[index];
        contentText += `${equip} <br />`
      }
      setEquipText(contentText);
    } else {
      navigate("/error");
    }
  }, [id, navigate]);

  return (
    <div>
      <CompCarrousel images={logementActif.pictures} />

      <div className="wrapperContentLog">
        <TitlesTagsComp
          title={logementActif?.title}
          location={logementActif?.location}
          tags={logementActif?.tags}
        />
        <ProfilStarsComp profil_name={logementActif?.host?.name} srcImg={logementActif?.host?.picture} rate={parseInt(logementActif?.rating)} />
      </div>

      <div className="containerDropDowLogement">
        <div className="diviserDrop">
          <CompDropDownList
            title={"Description"}
            content={logementActif.description}
          />
        </div>
        <div className="diviserDrop">
          <CompDropDownList title={"Equipements"} content={equipText} />
        </div>
      </div>
    </div>
  );
};

export default ScreenLogement;
