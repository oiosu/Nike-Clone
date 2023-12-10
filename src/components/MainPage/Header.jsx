import styled from "styled-components";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
// import page
import Login from "../LoginPage/Login";

const TopMenu = styled.header`
  display: flex;
  justify-content: flex-end;

  align-items: center;
  color: black;
  background-color: #f5f5f5;
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

    button {
      display: inline-block;
      position: relative;
      cursor: pointer;
      border-style: none;
      background-color: #f5f5f5;
      font-size: 12px;
      font-weight: bold;
    }

    button:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      height: 4px;
      background-color: #000;
      transition: all 0.5s;
    }
    button:before {
      content: "";
      position: absolute;
      right: 50%;
      bottom: 0;
      width: 0;
      height: 4px;
      background-color: #000;
      transition: all 0.5s;
    }
    button:hover:after {
      width: 50%;
    }
    button:hover:before {
      width: 50%;
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
  const navigate = useNavigate();
  // 로그인 페이지
  const navigateLogin = () => {
    navigate("/login");
  };

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
        <li>
          <button onClick={navigateLogin}>로그인</button>
        </li>
      </ul>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </TopMenu>
  );
};

export default Header;
