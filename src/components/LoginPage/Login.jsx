import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import page
// import Nav from "../MainPage/Nav";
// import NavFooter from "../MainPage/NavFooter";
// import Footer from "../MainPage/Footer";

const LoginPage = styled.div`
  .page {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    padding: 0 20px;

    left: 50%;
    transform: translate(-50%);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .images {
    display: flex;
  }
  .nikeLogo {
  }
  .jodarnLogo {
  }
  img {
    width: 70px;
    height: 70px;
    margin-left: 20px;
  }

  .titleWrap {
    margin-top: 87px;
    font-size: 20px;
    font-weight: 700;
    color: #000000;
  }
  .contentWrap {
    margin-top: 26px;
    flex: 1;
  }

  .inputTitle {
    font-size: 12px;
    font-weight: 600;
    color: #000000;
  }

  .inputWrap {
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #71777c;
  }

  .inputWrap:focus-within {
    border: 1px solid #232323;
  }

  .input {
    width: 100%;
    outline: none;
    border: none;
    height: 17px;
    font-size: 14px;
    font-weight: 400;
  }

  .input::placeholder {
    color: #dadada;
  }

  .errorMessageWrap {
    margin-top: 8px;
    color: #ef0000;
    font-size: 12px;
  }

  .bottomButton {
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #71777c;
    color: #fff;
    margin-bottom: 90px;
    cursor: pointer;
  }

  .bottomButton:disabled {
    background-color: #dadada;
    color: white;
  }
`;

const User = {
  email: "dlgpdnjs28@gmail.com",
  pw: "dlgpdnjs28!!!",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    setEmailValid(emailRegex.test(email));

    const pwRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    setPwValid(pwRegex.test(pw));
  }, [email, pw]);

  useEffect(() => {
    setNotAllow(!(emailValid && pwValid));
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPw(e.target.value);
  };

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert("로그인에 성공했습니다.");
      setIsLoggedIn(true);
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  const onClickLogoutButton = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPw("");
  };
  return (
    <>
      <div className="page">
        <div className="titleWrap">
          <h1>Nike</h1>
          <div className="images">
            <a href="#" className="nikeLogo">
              <img src="/assets/nikeLogo.png" alt="나이키로고" />
            </a>
            <a href="#" className="jordanLogo">
              <img src="/assets/jordanLogo.png" alt="조던로고" />
            </a>
          </div>
          <br />
          가입 또는 로그인 위해
          <br />
          이메일을 입력하세요.
        </div>

        <div className="contentWrap">
          <div className="inputTitle">이메일 주소</div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="이메일"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>
          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="비밀번호"
              value={pw}
              onChange={handlePassword}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div> 영문, 숫자, 특수문자 포함 8자 이상 입력해주세요. </div>
            )}
          </div>
        </div>
        <div>
          {isLoggedIn ? (
            <button onClick={onClickLogoutButton} className="bottomButton">
              로그아웃
            </button>
          ) : (
            <button
              onClick={onClickConfirmButton}
              disabled={notAllow}
              className="bottomButton"
            >
              확인
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
