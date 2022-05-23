import React from 'react';
import { BsTools } from "@react-icons/all-files/bs/BsTools";
import { MdOutlineRateReview } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiDollarCircle} from "react-icons/bi";
import CountUp from 'react-countup';

const BusinessSummary = () => {
    return (
        <section class="text-gray-800 body-font bg-[url(https://i.ibb.co/jGrNzzN/d.jpg)]">
            <div class="container px-5 py-12 mx-auto text-center">
                <div class="flex flex-col text-center w-full mb-20">
                    <h2 class="text-md text-primary tracking-widest font-bold title-font mb-1 uppercase">Business Summary</h2>
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">Master Cleanse Reliac Heirloom</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div class="flex flex-wrap">
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60 text-center">
                        <AiOutlineUsergroupAdd className='text-8xl text-primary p-3 text-center sm:10 lg:ml-24  mb-2' />
                        <h2 class="title-font font-medium sm:text-4xl text-3xl"><CountUp end={234} />k+</h2>
                        <p>Customers</p>
                    </div>
                    <div class="xl:w-1/4 lg:w-1/1 md:w-full px-8 py-6 sm:border-l-none lg:border-l-2 border-gray-200 ">
                    <MdOutlineRateReview className='text-8xl text-primary p-3 text-center sm:10 lg:ml-24 mb-2' />
                        <h2 class="title-font font-medium sm:text-4xl text-3xl"><CountUp end={334} />k+</h2>
                   <p>Reviews</p>
                    </div>
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 sm:border-l-none  lg:border-l-2 border-gray-200">
                    <BiDollarCircle className='text-8xl text-primary p-3 text-center sm:10 lg:ml-24  mb-2' />
                        <h2 class="title-font font-medium sm:text-4xl text-3xl"><CountUp end={104} />k+</h2>
                        <p>Revenues</p>
                    </div>
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 sm:border-l-none  lg:border-l-2 border-gray-200">
                    <BsTools className='text-8xl text-primary p-3 text-center sm:10 lg:ml-24 mb-2' />
                        <h2 class="title-font font-medium sm:text-4xl text-3xl"><CountUp end={100} />k+</h2>
                        <p>Tools</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;