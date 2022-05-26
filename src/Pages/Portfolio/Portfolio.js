import React from 'react';
import Education from './Education';
import MySkills from './MySkills';
import PortfolioBanner from './PortfolioBanner';
import Projects from './Projects';

const Portfolio = () => {
    return (
        <div>
            <PortfolioBanner></PortfolioBanner>
            <Education></Education>
            <MySkills></MySkills>
            <Projects></Projects>
        </div>
    );
};

export default Portfolio;