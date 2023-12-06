import styled from "styled-components";
import React from 'react';

// img
import LastImg1 from './img/lastimg1.png';
import LastImg2 from './img/lastimg2.png';


const LastSection = styled.section`
    .AirMax {
        display: flex;
        justify-content: center;
        align-item: center;
        margin-left: 30px;
    }

    img{
        margin-top: 8px;
        width: 1250px;
    }
    .MainText {
        margin-top: 40px;
        text-align: center;
    }
    .title {
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: bold;
    }
    .content-text {
        margin-bottom: 10px;
        font-size: 14px;
    }
    .main-btn {
        margin-top: 20px;
        margin-bottom: 100px;
    }
    .buy-btn {
        background-color: #000;
        color: #fff;
        padding: 10px;
        border-radius: 30px;
        border-style: none;
        padding-left: 10px;
        padding-right: 10px;
        margin: 10px;
    }

    .shop-title {
        font-size: 21px;
        font-weight: bold;
        margin-top: 100px;
        margin-left: 10%;
        margin-bottom: 40px;
    }



`;

const LastContainerComponent = () => {
    return (
        <LastSection>
            {/* 에어맥스 필스 롬 section */}
            <div className="AirMax">
                <img src={LastImg1} alt="LastImg1" />
            </div>
            <div className="MainText">
                <div className="little-title">에어맥스 펄스롬</div>
                <div className="title">끝없는 움직임</div>
                <div className="content-text">도심에서 펼쳐질 그 어떤 상황에서도 편안하도록.</div>
                <div className="content-text">새로워진 에어백스 펄스 롬으로아침부터 밤까지 언제 어디서든 완전한 자유를 경험해 보세요.</div>
                <div className="main-btn">
                    <button className="buy-btn">구매하기</button>
                </div>
            </div>
            {/* GORE-TEX section */}
            <div className="AirMax">
                <img src={LastImg2} alt="LastImg2" />
            </div>
            <div className="MainText">
                <div className="title">나이키 페가수스 트레일 GORE-TEX</div>
                <div className="content-text">비 오는 거리를 달리거나 진흙이 많은 트레일 코스를 지나갈 때도 발을 쾌적한 상태로 유지해 주는</div>
                <div className="content-text">나이키 페가수스트레일 GORE-TEX를 만나 보세요.</div>
                <div className="main-btn">
                    <button className="buy-btn">구매하기</button>
                </div>
            </div>


        </LastSection>
    );
};

export default LastContainerComponent;
