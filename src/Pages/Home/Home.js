import React from 'react';
import About from './About';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import LogoSection from './LogoSection';
import Reviews from './Reviews';
import Info from './Info';
import Lights from './Lights';
import DiscountBanner from './DiscountBanner';
import OurGallery from './OurGallery';
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Info></Info>
            <About></About>
            <Lights></Lights>
            <DiscountBanner></DiscountBanner>
            <BusinessSummary></BusinessSummary>
            <OurGallery></OurGallery>
            <LogoSection></LogoSection>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;