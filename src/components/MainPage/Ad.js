import styled from "styled-components";
import React from 'react';
import ScrollToTopButton from "./ScrollToTopButton";

// img
import Ad1 from './img/ad1.png';
import Ad2 from './img/ad2.png';
import Ad3 from './img/ad3.png';
import Ad4 from './img/ad4.png';

const AdContainer = styled.section`
    .title {
        font-size: 21px;
        font-weight: bold;
        margin-bottom: 40px;
        margin-left: 65px;
    }

    .adimg {
        display: flex;
        justify-content: center;
    }

    img {
        margin-right: 20px;
    }

    .adtext {
        display: flex;
        justify-content: center;
        margin-left: 45px;
        width: 'auto';
        height: '400px';
    }

    .ad-title {
        font-size: 20px;
        font-weight: bold; 
        margin-right: 90.5px;
        padding-right: 10px;
    }

    .ad-text {
        font-size: 13px;
    }

    button {
        background-color: #000;
        color: #fff;
        padding: 10px;
        border-radius: 30px;
        border-style: none;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 20px;
        margin-bottom: 100px;
        &:hover {
        background: cornflowerblue;
        color: white;
        transition: 0.5s;
        font-weight: bold;
        }
    }
`;


const Ad = () => {
    return (
        <AdContainer>
            <div className="ad-section">
                <div className="title">
                    나이키 커뮤니티와 함께 하기
                </div>
                <div className="adimg">
                    <img src={Ad1} alt="Gift1" style={{ height: '400px', width: 'auto', marginBottom: '20px' }} />
                    <img src={Ad2} alt="Gift1" style={{ height: '400px', width: 'auto', marginBottom: '20px' }} />
                    <img src={Ad3} alt="Gift1" style={{ height: '400px', width: 'auto', marginBottom: '20px' }} />
                    <img src={Ad4} alt="Gift1" style={{ height: '400px', width: 'auto', marginBottom: '20px' }} />
                </div>
                <div className="adtext">
                    <div className="ad-title">
                        나이키 앱
                        <div className="ad-text">
                            원하는 것을 누구보다 빠르게, 새로운 영감으로 <br />
                            매일을 새롭게, 상상했던 경험을 현실로, <br />
                            여러분의 매일을 나이키 앱에서 바꿔보세요. <br />
                        </div>
                        <button>자세히 보기</button>
                    </div>
                    <div className="ad-title">
                        나이키 트레이닝 클럽(NTC)
                        <div className="ad-text">
                            NTC앱으로 개인 맞춤형 트레이닝 가이드.<br />
                            운동, 마음가짐, 영양, 수면 등 몸과 <br />
                            마음을 위한 점누가 팁도 함께 제공됩니다. <br />
                        </div>
                        <button>자세히 보기</button>
                    </div>
                    <div className="ad-title">
                        나이키 런 클럽(NRC)
                        <div className="ad-text">
                            NRC 앱과 함께 언제 어디서든 러닝.<br />
                            전문 러닝 코치들의오디오 가이드 런으로 <br />
                            올바른 러닝 루틴을 만들 수 있습니다. <br />
                        </div>
                        <button>자세히 보기</button>
                    </div>
                    <div className="ad-title">
                        SNKRS앱
                        <div className="ad-text">
                            최고의 스니커즈, 최신 발매 소식,비하인드 스토리. <br />
                            새로운 스니커즈 문화를 선도할 <br />
                            SNKRS 커뮤니티로 초대합니다. <br />
                        </div>
                        <button>자세히 보기</button>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
        </AdContainer>
    );
};

export default Ad;  