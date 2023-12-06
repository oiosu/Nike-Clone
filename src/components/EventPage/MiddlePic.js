import React from "react";
import "./MiddlePic.css";

const MiddlePic = ({ image1, image2, image3 }) => {
  return (
    <div className="middle-imgs">
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
    </div>
  );
};

export default MiddlePic;
