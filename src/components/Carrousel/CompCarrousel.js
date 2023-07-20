import React, { useEffect, useState } from "react";
import "./StyleCarrousel.css";

const CompCarrousel = ({ images }) => {
  const [dataImages, setDataImages] = useState([]);
  const [indexImg, setIndexImg] = useState(0);

  const handleCarrousel = (typeHandle) => {
    let lengthData = dataImages.length;
    if (typeHandle === "next") {
      if (indexImg === lengthData - 1) {
        setIndexImg(0);
      } else {
        setIndexImg((indexNew) => indexNew + 1);
      }
    } else {
      if (indexImg === 0) {
        setIndexImg(lengthData - 1);
      } else {
        setIndexImg((indexNew) => indexNew - 1);
      }
    }
  };

  useEffect(() => {
    if (images) {
      setDataImages(images);
    }
  }, [images]);

  return (
    <div className="containerCarrousel">
      <img
        className="arrow arrowLeft"
        onClick={() => {
          handleCarrousel("prev");
        }}
        src={require("../../img/icons/Arrow.png")}
        alt="arrow_left"
      />
      <img
        className="carrouselImg"
        src={dataImages?.length > 0 ? dataImages[indexImg] : ""}
        alt="image_carrousel"
      />
      <img
        className="arrow arrowRight"
        onClick={() => {
          handleCarrousel("next");
        }}
        src={require("../../img/icons/Arrow.png")}
        alt="arrow_right"
      />
    </div>
  );
};

export default CompCarrousel;
