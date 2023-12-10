import React from "react";
import clothesData from "../../data/Products_data.js";
import Products from "./Products.jsx";
// import page
import Nav from "../MainPage/Nav.jsx";
import Footer from "../MainPage/Footer.jsx";

const ProductList = () => {
  return (
    <>
      <Nav />
      <Products items={clothesData} />
      e <Footer />
    </>
  );
};

export default ProductList;
