import React from 'react';
import { GiBedLamp } from "@react-icons/all-files/gi/GiBedLamp";
import { MdOutlineRateReview } from "react-icons/md";
import { GiFlexibleLamp } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import CountUp from 'react-countup';

const BusinessSummary = () => {
    return (
        <section className="hero text-white body-font lg:mb-16">
            <div className="container py-12 mx-auto text-center">
                <div className="flex flex-col text-center w-full mb-12">
                    <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 uppercase">Business Summary</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Trusted By Worldwide</h1>
                </div>
                <div className='lg:relative mx-5 hidden lg:block'>
                    <img className='h-72 w-full' src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Lighting_and_Fans/Lamp_Shades/MOB-Hero-Lamp-Styles.jpg" alt="" srcset="" />
                </div>
                <div className=''>
                    <div className="grid lg:grid-cols-6 grid-cols-2 gap-8 lg:absolute w-full lg:px-20 lg:-mt-36 px-6">
                        <div className="px-8 text-center  bg-primary p-8 shadow-lg shadow-gray-300">
                            <AiOutlineUsergroupAdd className='text-8xl text-white mx-auto p-3' />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl"><CountUp end={234} />+</h2>
                            <p>Customers</p>
                        </div>
                        <div className="bg-primary p-8 shadow-lg shadow-gray-300">
                            <GiBedLamp className='text-8xl text-white mx-auto p-3' />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl"><CountUp end={150} />+</h2>
                            <p>Bedroom</p>
                        </div>
                        <div className="bg-primary p-8 shadow-lg shadow-gray-300">
                            <MdOutlineRateReview className='text-8xl text-white mx-auto p-3' />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl"><CountUp end={334} />+</h2>
                            <p>Reviews</p>
                        </div>
                        <div className="bg-primary p-8 shadow-lg shadow-gray-300">
                            <BiDollarCircle className='text-8xl text-white mx-auto p-3' />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl"><CountUp end={204} />+</h2>
                            <p>Revenues</p>
                        </div>
                        <div className="bg-primary p-8 shadow-lg shadow-gray-300">
                            <GiFlexibleLamp className='text-8xl text-white mx-auto p-3' />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl"><CountUp end={500} />+</h2>
                            <p>Reading</p>
                        </div>
                        <div className="bg-primary p-8 shadow-lg shadow-gray-300">
                            <MdProductionQuantityLimits className='text-8xl text-white mx-auto p-3' />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl"><CountUp end={200} />+</h2>
                            <p>Lamps</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;