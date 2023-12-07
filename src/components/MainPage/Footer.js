import styled from "styled-components";
import React from 'react';
import Share from './Share';

const FooterSection = styled.section`
    .footer-section {
        background-color: #111;
        width: 100%;
        height: 330px;
        display: flex;
        justify-content: flex-start;
    }


    .footer-first {
        color: #fff;
        font-size: 13px;
        font-weight: bold;
        margin-top: 50px;
        margin-left: 190px;
    }

    .footer-second {
        color: #fff;
        font-size: 13px;
        font-weight: bold;
        margin-top: 50px;
        margin-left: 150px;
    }

    .footer-second .big {
        font-size: 13px;
    }

    .footer-second .small {
        color: #ddd;
        font-size: 10px;
        
    }

    .share-btn {
        display: flex;
        justify-content: flex-end;
        margin-left: 430px;
        margin-top: 0px;
        margin-bottom: 134px;
        margin-right: 30px;
    }

    .footer-text {
        width: 100%;
        height: 30px;
        color: #fff;
        background-color: #111;
        text-align: center;
        margin-top: -50px;
        font-size: 13px;
        font-weight: bold;
    }
`;


const Footer = () => {
    return (
        <FooterSection>
            <div className="footer-section">
                <div className="footer-first">
                    <p>새로운 소식</p>
                    <p>멤버가입</p>
                    <p>매장안내</p>
                    <p>나이키 저널</p>
                </div>
                <div className="footer-second">
                    <p className="big">HELP</p>
                    <div className="small">
                        <p>로그인 안내</p>
                        <p>주문배송조회</p>
                        <p>반품 정책</p>
                        <p>결제 방법</p>
                        <p>공지사항</p>
                    </div>
                </div>
                <div className="footer-second">
                    <p className="big">ABOUT NIKE</p>
                    <div className="small">
                        <p>소식</p>
                        <p>채용</p>
                        <p>투자자</p>
                        <p>지속가능성</p>
                    </div>

                </div>
                <span className="share-btn">
                    <Share />
                </span>
            </div>
            <div className="footer-text">
                © 2023 SuperCoding FE 01팀, Inc. All Rights Reserved.
            </div>

        </FooterSection>

    );
};

export default Footer;
