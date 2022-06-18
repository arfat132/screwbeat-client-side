import React from 'react';
import Footer from '../../shared/Footer';
import Faq from './Faq';
import Hero from './Hero';

const About = () => {
    return (
        <div className='pt-24'>
            <div className='w-[1600px] mt-4 mb-4'>
                <img className='lg:mx-6 lg:w-[1475px]' src="https://i.ibb.co/hmKjLbq/sb.png" alt="" />
            </div>
            <Hero></Hero>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default About;