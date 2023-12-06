import styled from "styled-components";
import React from 'react';


const MainMenu = styled.nav`
    display: flex;
    flex-flow: row wrap;
    background: #fff;
    width: 100%; 
    height: 70px;


    .MainNav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .nike_logo {
        margin-left: 140px; 
    }

    .MenuList {
        flex-grow: 1;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
    }
    
    ul {
        display: flex;
        justify-content: center;
        list-style: none; 
        margin: 0;
        padding: 0;
    }

    li {
        margin-left: 20px;
        margin-right: 40px;
        margin-bottom: 10px;
    }

    .UserMenu {
        margin-right: 20px;
        margin-bottom: 10px;

    }

    input{
        margin-right: 15px;
        visibility: visible;
        background: #f5f5f5;
        color: inherit;
        cursor: text;
    }

    span{
        margin-right: 10px;
        font-size: 14px;
        font-weight: bold;
    }

`;


const Nav = () => {
    return (
        <MainMenu>
            <div className="MainNav">
                <div className="nike_logo">
                    {/* 이미지 추가작업 필요 */}
                    {/* <img src={nikeLogo} alt="Logo" /> */}
                </div>
                <div className="MenuList">
                    <ul>
                        <li>New Releases</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Sale</li>
                        <li>SNKRS</li>
                        <li>연말을 위한 선물</li>
                    </ul>
                </div>
                <div className="UserMenu">
                    <input />
                    <span>위시리스트</span>
                    <span>장바구니</span>
                </div>

            </div>
        </MainMenu>
    );
};

export default Nav;
