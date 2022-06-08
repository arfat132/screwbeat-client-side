import React from 'react';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Reviews from './Reviews';
import Info from './Info';
import Lights from './Lights';
import DiscountBanner from './DiscountBanner';
import OurGallery from './OurGallery';
import WorkProcessing from './WorkProcessing';
import NewArrivals from './NewArrivals';
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Info></Info>
            <WorkProcessing></WorkProcessing>
            <Lights></Lights>
            <DiscountBanner></DiscountBanner>
            <NewArrivals></NewArrivals>
            <BusinessSummary></BusinessSummary>
            <OurGallery></OurGallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;