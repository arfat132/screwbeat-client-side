import React from 'react';
import { BsTools } from "@react-icons/all-files/bs/BsTools";
import { MdOutlineRateReview } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import CountUp from 'react-countup';

const BusinessSummary = () => {
    return (
        <section className="hero text-white body-font bg-no-repeat bg-[url(https://plankandpillow.com/wp-content/uploads/2021/09/cfl-floor-lamp.jpg)] md:bg-[url(https://homedecorbliss.com/wp-content/uploads/2021/03/A-modern-living-room-with-lamp-and-end-tables.jpg)] lg:bg-[url(https://cdn8.bigcommerce.com/s-hqjg7u/product_images/uploaded_images/living-room-imagecrop.jpg)]">
            <div className="hero-overlay bg-opacity-80 w-full"></div>
            <div className="container px-5 py-12 mx-auto text-center">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 uppercase">Business Summary</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font">Trusted By Worldwide</h1>
                </div>
                <div className="flex flex-wrap">
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 text-center">
                        <AiOutlineUsergroupAdd className='text-8xl text-primary p-3 text-center sm:10 lg:ml-24  mb-2' />
                        <h2 className="title-font font-medium sm:text-4xl text-3xl"><CountUp end={234} />k+</h2>
                        <p>Customers</p>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/1 md:w-full px-8 py-6">
                        <MdOutlineRateReview className='text-8xl text-primary p-3 text-center sm:10 lg:ml-24 mb-2' />
                        <h2 className="title-font font-medium sm:text-4xl text-3xl"><CountUp end={334} />k+</h2>
                        <p>Reviews</p>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6">
                        <BiDollarCircle className='text-8xl text-primary p-3 text-center sm:10 lg:ml-24  mb-2' />
                        <h2 className="title-font font-medium sm:text-4xl text-3xl"><CountUp end={104} />k+</h2>
                        <p>Revenues</p>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6">
                        <BsTools className='text-8xl text-primary p-3 text-center sm:10 lg:ml-24 mb-2' />
                        <h2 className="title-font font-medium sm:text-4xl text-3xl"><CountUp end={100} />k+</h2>
                        <p>Tools</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;