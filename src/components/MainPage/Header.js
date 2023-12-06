import React from 'react';
import styled from "styled-components";

const TopMenu = styled.header`
    display: flex;
    justify-content: flex-end; 

    align-items: center;
    color: black;
    background-color: #F5F5F5;
    font-size: 12px;
    font-weight: bold;
    width: 100%;
    height: 30px;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;

        li {
            margin-right: 20px;
            cursor: pointer;
        }
    }
`;


const Header = () => {
    return (
        <TopMenu>
            <ul>
                <li>매장찾기</li>
                <li>고객센터</li>
                <li>가입하기</li>
                <li>로그인</li>
            </ul>
        </TopMenu>
    );
};

export default Header;
