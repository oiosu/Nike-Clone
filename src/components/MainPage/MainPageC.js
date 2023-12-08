import React from 'react';
import styled from 'styled-components';
import MainContainerComponent from "../MainPage//MainContainer";
import Gift from "../MainPage/Gift";
import Apparel from "../MainPage/Apparel";
import VictoryF from "../MainPage/VictoryF";
import LastContainer from "../MainPage/LastContainer";
import Ad from "../MainPage/Ad";
import Nav from '../MainPage/Nav';
import Footer from '../MainPage/Footer';

const MainPageContainer = styled.div`

`;

const MainPageC = () => {
    return (
        <>
            <Nav />
            <MainPageContainer>
                <MainContainerComponent />
                <Gift />
                <Apparel />
                <VictoryF />
                <LastContainer />
                <Ad />
            </MainPageContainer>

        </>
    );
};

export default MainPageC;