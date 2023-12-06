import styled from "styled-components";
import React from 'react';

// img
import Friday from './img/Friday.png';
import AirForce from './img/airforce.png';
import Gif1 from './img/video1.gif';


const VictoryF = styled.section`
    .NikeAppVictory {
        display: flex;
        justify-content: center;
        align-item: center;
        margin-left: 30px;
    }

    img{
        margin-top: 140px;
        width: 1250px;
    }
    .little-title {
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 10px;
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
    .detail-btn {
        background-color: #000;
        color: #fff;
        padding: 10px;
        border-radius: 30px;
        border-style: none;
        padding-left: 10px;
        padding-right: 10px;
        margin: 10px;
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
    .AirForce img {
        display: flex;
        justify-content: center;
        margin-top: -30px;
        width: 1250px;
        margin-left: 150px;

    }

    .title-now {
        font-size: 21px;
        font-weight: bold;
        margin-top: 100px;
        margin-left: 10%;
        margin-bottom: -90px;
    }

    .GifImg {
        display: flex;
        justify-content: start;
        margin-left: 10%;
    }

    .gif1-text1 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 7px;
    }

    .gif1-text2 {
        font-size: 13px;
    }

    .gif1-text3 {
        font-size: 13px;
        margin-bottom: 160px;
    }

`;

const VictoryComponent = () => {
    return (
        <VictoryF>
            {/* NikeAppVictory section  */}
            <div className="NikeAppVictory">
                <img src={Friday} alt="NikeAppVictory" />
            </div>
            <div className="MainText">
                <div className="little-title">Nike App Victory Friday</div>
                <div className="title"> 호시의 보메로 5 스타일</div>
                <div className="content-text">포인트 매치로 완성한 호시의 세 가지 보메로 5 스타일링을 확인하고,</div>
                <div className="content-text">추첨을 통해 50명에게 제품이 제공되는 앱 기프트 이벤트에 응모해보세요</div>
                <div className="main-btn">
                    <button className="detail-btn">기프트 응모하기</button>
                    <button className="buy-btn">추첨 스타일 구매하기</button>
                </div>
            </div>
            {/* Trending Now section */}
            <div className="TrendingNow">
                <div className="title-now">Tranding Now</div>
            </div>
            <div className="GifImg">
                <div className="GifImgSection">
                    <img src={Gif1} alt="Gif1" style={{ height: '390px', width: '598px', marginBottom: '20px' }} />
                    <div className="gif1-text1">한층 더 쉬어진 쇼핑을 즐겨보세요</div>
                    <div className="gif1-text2">당신만을 위한 제품 추천과 간편 결제 그리고 무료배송</div>
                    <div className="gif1-text3">나이키 앱으로 편리한 쇼핑을 즐겨 보세요.</div>
                </div>
                <div className="GifImgSection">
                    <img src={Gif1} alt="Gif1" style={{ height: '390px', width: '650px', marginBottom: '20px' }} />
                    <div className="gif1-text1">한층 더 쉬어진 쇼핑을 즐겨보세요</div>
                    <div className="gif1-text2">당신만을 위한 제품 추천과 간편 결제 그리고 무료배송</div>
                    <div className="gif1-text3">나이키 앱으로 편리한 쇼핑을 즐겨 보세요.</div>
                </div>
            </div>

            {/* AirForce section  */}
            <div className="AirForce">
                <img src={AirForce} alt="AirForce" />
            </div>
            <div className="MainText">
                <div className="title">에어 포스 1 에센셜</div>
                <div className="content-text">에어 포스 1'07과 함께 완전히 새로운 스타일에 도전해 보세요.</div>
                <div className="content-text">뒤꿈치부터 발끝까지 이어지는 에어 쿠셔닝과 세련된 컬러웨이가 편안하면서도 아이코닉한 스타일을 선사합니다.</div>
                <div className="main-btn">
                    <button className="detail-btn">구매하기</button>
                </div>
            </div>

        </VictoryF>
    );
};

export default VictoryComponent;
