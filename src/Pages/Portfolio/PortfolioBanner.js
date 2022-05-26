import React from 'react';
import { HiOutlineMailOpen } from "@react-icons/all-files/hi/HiOutlineMailOpen";
const PortfolioBanner = () => {
    return (
        <section className="text-gray-600 body-font px-12">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-primary">Hello I am Arfat,</h1>
                    <p className="mb-8 leading-relaxed">I've been in the Web Development field for the last 6 months with enough experience and extensive knowledge in React js, HTML5, CSS, JavaScript, JavaScript ES6, Tailwind CSS, Bootstrap, Firebase, Figma and Adobe Photoshop and Illustrator. I am also working as a full-stack developer with back-end technologies like Node js, Express I am highly motivated and I love to get work done in a quick manner. I love learning new skills and I am excited to work with clients. Drop a message and let's get started. I am also available for permanent work.</p>
                    <div className='flex items-center'>
                        <HiOutlineMailOpen className='mt-1 mr-2 text-xl text-orange-500' />
                        <p>arfatakter39@gmail.com</p>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded mx-auto" alt="hero" src="https://i.ibb.co/QHy6SqJ/51afuwontcl-ul1256-500x500.jpg" />
                </div>
            </div>
        </section>
    );
};

export default PortfolioBanner;