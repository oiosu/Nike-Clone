import styled from "styled-components";
import React from "react";
import MainImg from "./img/mainimg.png";

const MainContainer = styled.nav`
  .MainImg {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
  }
  img {
    margin-top: 30px;
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
`;

const MainContainerComponent = () => {
  return (
    <MainContainer>
      <div className="MainImg">
        <img src={MainImg} alt="MainImg" />
      </div>
      <div className="MainText">
        <div className="title"> 우리를 움직이게 하는 선물</div>
        <div className="content-text">
          오늘의 감동이 내일의 움직임으로 이어지도록
        </div>
        <div className="content-text">
          나와 소중한 이들에게 선물 그 이상을 전해보세요
        </div>
        <div className="main-btn">
          <button className="detail-btn">자세히 보기</button>
          <button className="buy-btn">기프트 컬렉션 구매하기</button>
        </div>
      </div>
    </MainContainer>
  );
};

export default MainContainerComponent;
