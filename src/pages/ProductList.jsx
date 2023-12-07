import React from 'react';
import Products from "../components/productList/Products.jsx";
import clothesData from "../data/Products_data.js";

const ProductList = () => {
    return (
        <>
            <Products items={clothesData}/>
        </>
    );
};

export default ProductList;