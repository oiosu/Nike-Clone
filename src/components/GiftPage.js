import React from "react";
import TopAndDownPic from "./TopAndDownPic";
import toppic from "../assets/toppic.png";
import downpic from "../assets/downpic.png";

import MiddlePic from "../components/MiddlePic";

import middlepic1 from "../assets/middlepic1.png";
import middlepic2 from "../assets/middlepic2.png";
import middlepic3 from "../assets/middlepic3.png";

const GiftPage = () => {
  return (
    <div>
      <TopAndDownPic image={toppic} />
      <b>가격별대 선물 추천</b>
      <MiddlePic image1={middlepic1} image2={middlepic2} image3={middlepic3} />
      <TopAndDownPic image={downpic} />
    </div>
  );
};

export default GiftPage;
