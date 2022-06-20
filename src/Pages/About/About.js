import React from 'react';
import Footer from '../../shared/Footer';
import Faq from './Faq';
import Hero from './Hero';
import Team from './Team';

const About = () => {
    return (
        <div className='pt-24'>
            <Hero></Hero>
            <Team></Team>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default About;