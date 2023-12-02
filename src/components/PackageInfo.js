import React from "react";
import "./PackageInfo.css";
import DetailButton from "./DetailButton";
import PurchaseButton from "./PurchaseButton";

const PackageInfo = ({ image, title, content }) => {
  return (
    <>
      <div className="package-img">
        <img src={image} alt="package" />
        <div className="package-title">
          <b>{title}</b>
        </div>
        <div className="package-content">{content}</div>
        <DetailButton />
        <PurchaseButton />
      </div>
    </>
  );
};

export default PackageInfo;
