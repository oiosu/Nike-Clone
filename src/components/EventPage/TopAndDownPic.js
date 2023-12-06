import React from "react";
import "./TopAndDownPic.css";

const TopAndDownPic = ({ image }) => {
  return (
    <div className="topdown-img">
      <img src={image} alt="" />
    </div>
  );
};

export default TopAndDownPic;
