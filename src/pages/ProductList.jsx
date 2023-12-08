import React from 'react';
import Products from "../components/productList/Products.jsx";
import clothesData from "../data/Products_data.js";
import Nav from "../components/MainPage/Nav";
import Footer from "../components/MainPage/Footer";

const ProductList = () => {
    return (
        <>
            <Nav />
            <Products items={clothesData}/>
            <Footer />
        </>
    );
};

export default ProductList;