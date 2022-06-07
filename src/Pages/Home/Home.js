import React from 'react';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
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
            <Lights></Lights>
            <DiscountBanner></DiscountBanner>
            <BusinessSummary></BusinessSummary>
            <OurGallery></OurGallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;