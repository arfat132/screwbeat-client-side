import React from 'react';
import { RiNewspaperLine } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineHighQuality } from 'react-icons/md';
const Info = () => {
    return (
        <div className="flex flex-wrap text-center w-[400px] md:w-[800px] lg:w-[900px] lg:mx-96 mx-4 bg-primary py-12 -mt-24 absolute">
                    <div className="w-1/3 border-gray-200 border-opacity-60 text-center">
                    <IoIosPeople className='mx-auto text-5xl mb-4 text-white'/>
                <h1 className='lg:text-xl text-sm font-medium text-white'>We are professional</h1>
                    </div>
                    <div className="w-1/3  sm:border-l-none lg:border-l-2 border-gray-200 ">
                    <RiNewspaperLine className='mx-auto text-5xl mb-4 text-white'/>
                <h1 className='lg:text-xl text-sm font-medium text-white'>Licened & Insured</h1>
                    </div>
                    <div className="w-1/3 sm:border-l-none  lg:border-l-2 border-gray-200">
                    <MdOutlineHighQuality className='mx-auto text-5xl mb-4 text-white'/>
                <h1 className='lg:text-xl text-sm font-medium text-white'>High Quality</h1>
                    </div>
                   
                </div>
    );
};

export default Info;