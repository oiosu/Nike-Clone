import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";
import styled from "styled-components";
// import page
import Nav from "../MainPage/Nav";
import Footer from "../MainPage/Footer";

const Products = (props) => {
  const [filtered, setFiltered] = useState("");

  const filterChangeHandler = (selected) => {
    setFiltered(selected);
  };

  const sortItems = () => {
    // const itemsCopy = [...props.items];
    const itemsCopy = [...(props.items ?? [])];

    switch (filtered) {
      case "추천순":
        // 추천순으로 정렬 (기본 순서는 인덱스 순서)
        return itemsCopy;

      case "최신순":
        // 최신순으로 정렬 (가장 최근 날짜가 먼저 오도록)
        // return itemsCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
        return itemsCopy.sort((a, b) => new Date(b.date) - new Date(a.date));

      case "높은 가격순":
        // 높은 가격순으로 정렬
        // return itemsCopy.sort((a, b) => b.price - a.price);
        return itemsCopy.sort((a, b) => b.price - a.price);

      case "낮은 가격순":
        // 낮은 가격순으로 정렬
        // return itemsCopy.sort((a, b) => a.price - b.price);
        return itemsCopy.sort((a, b) => a.price - b.price);
      default:
        // 기본적으로는 추천순으로 정렬
        return itemsCopy;
    }
  };

  return (
    <>
      <Nav />
      <Box>
        <ProductsFilter
          selected={filtered}
          onChangeFilter={filterChangeHandler}
        />
        <List>
          {sortItems().map((item, index) => (
            <ProductCard
              key={index}
              id={item.id}
              src={item.src}
              name={item.name}
              info={item.info}
              color={item.color}
              price={item.price.toLocaleString()}
              discount={item.discount}
            />
          ))}
        </List>
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export default Products;

const Box = styled.div`
  max-width: 1830px;
  justify-content: center;
  margin: 0 auto;
  padding: 0 1rem;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
