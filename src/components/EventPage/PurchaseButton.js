import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  border: none;
  color: white;
  padding: 5px;
  margin: 0px 20px 0px 0px;

  background-color: black;
  border-radius: 5px;

  &:hover {
    /*transform: scale(1.05);*/
    background-color: blue;
  }
`;

const PurchaseButton = () => {
  return <Button>구매하기</Button>;
};

export default PurchaseButton;
