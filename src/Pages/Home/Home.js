import React from 'react';
import About from './About';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import LogoSection from './LogoSection';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <LogoSection></LogoSection>
            <About></About>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;