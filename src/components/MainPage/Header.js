import styled from "styled-components";
import React, { useState } from 'react';

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
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
    }

        li {
            margin: 0 10px;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
        }
    }

    .modal {
        width: 170px;
        height: 50px;
        margin-top: 9px;
        background-color: #000;
        position: absolute;
        z-index: 1; 
        border-radius: 30px;
        color: #fff;
        font-size: 15px;
    }

    .modal p {
        text-align: center;

    }
    
`;


const Header = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleMouseEnter = () => {
        setModalVisible(true);
    };

    const handleMouseLeave = () => {
        setModalVisible(false);
    };

    return (
        <TopMenu>
            <ul>
                <li>매장찾기</li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    고객센터
                    {isModalVisible && (
                        <div className="modal">
                            <p>🏄‍♂️준비중입니다!</p>
                        </div>
                    )}
                </li>
                <li>가입하기</li>
                <li>로그인</li>
            </ul>
        </TopMenu>
    );
};

export default Header;