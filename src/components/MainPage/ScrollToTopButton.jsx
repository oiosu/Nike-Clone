import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const ScrollBtn = styled.button`
    width: 80px;
    height: 40px;
    border-radius: 50%;
    margin-left: 1400px;
    font-weight: bold;
`;

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ScrollBtn className={isVisible ? 'visible' : 'hidden'} onClick={scrollToTop}>
            Top
        </ScrollBtn>
    );

};

export default ScrollToTopButton;
