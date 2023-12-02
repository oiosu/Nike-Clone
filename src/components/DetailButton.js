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
  /*transform: scale(1.1);*/
  background-color: blue;
`;

const DetailButton = () => {
  return <Button>자세히보기</Button>;
};

export default DetailButton;
