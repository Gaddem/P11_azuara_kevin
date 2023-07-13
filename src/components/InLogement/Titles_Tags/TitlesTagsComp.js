import React, { useEffect, useState } from "react";
import "./TitlesTagsStyle.css";

const TitlesTagsComp = ({ title, location, tags }) => {
  const [dataTags, setDataTags] = useState([]);
  const mappingTags = () => {
    return dataTags?.map((tag, i) => {
      return (
        <div key={i} className="containerTag">
          <p className="titleTags">{tag}</p>
        </div>
      );
    });
  };

  useEffect(() => {
    if (tags) {
      setDataTags(tags);
    }
  }, [tags]);

  return (
    <div className="container_titlestags">
      <p className="titleGeneral">{title}</p>
      <p className="titleSecondary">{location}</p>
      <div className="containerTags">{mappingTags()}</div>
    </div>
  );
};

export default TitlesTagsComp;
