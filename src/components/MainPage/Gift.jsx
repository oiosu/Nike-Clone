import React, { useState } from 'react';
// swiper
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// style
import styled from 'styled-components';
// img
import Gift1 from './img/gift1.png';
import Gift2 from './img/gift2.png';
import Gift3 from './img/gift3.png';
import Gift4 from './img/gift4.png';

const StyledSwiperContainer = styled.div`
  .gift-title {
    font-size: 21px;
    font-weight: bold;
    margin-left: 10%;
    margin-bottom: 40px;
  }

`;

const Gift = () => {
    const [setSwiperRef] = useState(null);


    return (
        <>
            <StyledSwiperContainer>
                <div className='gift-title'>
                    소중한 사람들을 위한 특별한 선물
                </div>

            </StyledSwiperContainer>

            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
            >
                <SwiperSlide>
                    <img src={Gift1} alt="Gift1" style={{ height: '600px', width: 'auto', marginBottom: '20px' }} />
                    <div className="gift1-title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                        스타일리쉬한 퍼포먼스를 위한 선물
                    </div>
                    <div className='gift1-text'>어떤 운동에도 스타일을 더하는 온더고 컬렉션을 선물해보세요.</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Gift2} alt="Gift2" style={{ height: '600px', width: 'auto', marginBottom: '20px' }} />
                    <div className="gift1-title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                        설레는 발걸음을 위한 선물
                    </div>
                    <div className='gift1-text'>새로운 가능성이 빛나는 연말, 설레는 발걸음을 선물해보세요</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Gift3} alt="Gift3" style={{ height: '600px', width: 'auto', marginBottom: '20px' }} />
                    <div className="gift1-title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                        따듯함을 위한 선물
                    </div>
                    <div className='gift1-text'>추운 겨울, 소중한 이들에게 따듯하을 선물해 보세요.</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Gift4} alt="Gift4" style={{ height: '600px', width: 'auto', marginBottom: '20px' }} />
                    <div className="gift1-title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                        아이들을 위한 선물
                    </div>
                    <div className='gift1-text'>아이들의 즐거운 겨울을 위해 내일의 가능성을 선물해 주세요.</div>
                </SwiperSlide>
            </Swiper>
        </>

    );
};

export default Gift;
