import React from 'react';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;