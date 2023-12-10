import React, { useState } from 'react';
// swiper
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// style
import styled from 'styled-components';
// img
import Apparel1 from './img/apparel1.png';
import Apparel2 from './img/apparel2.png';
import Apparel3 from './img/apparel3.png';
import Apparel4 from './img/apparel4.png';
import Apparel5 from './img/apparel5.png';
import Apparel6 from './img/apparel6.png';
import Apparel7 from './img/apparel7.png';
import Apparel8 from './img/apparel8.png';
import Apparel9 from './img/apparel9.png';
import Apparel10 from './img/apparel10.png';

const StyledSwiperContainer = styled.div`
  .gift-title {
    font-size: 21px;
    font-weight: bold;
    margin-top: 130px;
    margin-left: 10%;
    margin-bottom: 40px;
  }

`;


const Apparel = () => {
    const [setSwiperRef] = useState(null);

    return (
        <>
            <StyledSwiperContainer>
                <div className='gift-title'>
                    연말 선물 추천 Apparel
                </div>

            </StyledSwiperContainer>

            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
            >
                <SwiperSlide>
                    <img src={Apparel1} alt="Gift1" style={{ height: '450px', width: 'auto', marginBottom: '20px' }} />
                    <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>
                        나이키 솔로 스우시
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                        남성 플리스 풀오버 후디
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        101.100원
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Apparel2} alt="Gift2" style={{ height: '450px', width: 'auto', marginBottom: '20px' }} />
                    <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>
                        나이키 솔로 스우시
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                        남성 플리스 팬츠
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        97,700원
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Apparel3} alt="Gift3" style={{ height: '450px', width: 'auto', marginBottom: '20px' }} />
                    <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>
                        나이키 스포츠웨어 클럽
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                        남성 채딩 재킷
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        239,000원
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Apparel4} alt="Gift4" style={{ height: '450px', width: 'auto', marginBottom: '20px' }} />
                    <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>
                        나이키 스포츠웨어
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                        여성 리버서블 인조 퍼 봄버 재킷
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        219,000원
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Apparel5} alt="Gift4" style={{ height: '450px', width: 'auto', marginBottom: '20px' }} />
                    <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>
                        나이키 스포츠웨어 플러시
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                        여성 팬츠
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        105,000원
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Apparel6} alt="Gift4" style={{ height: '450px', width: 'auto', marginBottom: '20px' }} />
                    <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>
                        나이키 라이프
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                        남성 케이블 니트 터틀넥 스웨터
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        199,999원
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Apparel7} alt="Gift4" style={{ height: '450px', width: 'auto', marginBottom: '20px' }} />
                    <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>
                        나이키 퀼팅 봄버 재킷
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                        리틀키즈 재킷
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        109.100원
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Apparel8} alt="Gift4" style={{ height: '450px', width: 'auto', marginBottom: '20px' }} />
                    <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>
                        나이키 스포츠웨어
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                        주니어(여아)오버롤
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        95,000원
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Apparel9} alt="Gift4" style={{ height: '450px', width: 'auto', marginBottom: '20px' }} />
                    <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>
                        나이키 스포츠웨어
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                        여성 카라 하이파일 재킷
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        119,000원
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Apparel10} alt="Gift4" style={{ height: '450px', width: 'auto', marginBottom: '20px' }} />
                    <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>
                        조던 플라이트 플리스
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                        여성 윈터라이즈드 팬츠
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        115,000원
                    </div>
                </SwiperSlide>
            </Swiper>
        </>

    );
};

export default Apparel;