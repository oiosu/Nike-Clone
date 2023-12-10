import React from "react";
import styled from "styled-components";
import MainContainerComponent from "./MainContainer";
import Gift from "./Gift";
import Apparel from "./Apparel";
import VictoryF from "./VictoryF";
import LastContainer from "./LastContainer";
import Ad from "./Ad";
import Nav from "./Nav";
import NavFooter from "./NavFooter";
import Footer from "./Footer";

const MainPageContainer = styled.div``;

const MainPageC = () => {
  return (
    <>
      <Nav />
      <NavFooter />
      <MainPageContainer>
        <MainContainerComponent />
        <Gift />
        <Apparel />
        <VictoryF />
        <LastContainer />
        <Ad />
      </MainPageContainer>
      <Footer />
    </>
  );
};

export default MainPageC;
