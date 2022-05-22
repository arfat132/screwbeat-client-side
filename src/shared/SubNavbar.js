import React from 'react';
import { FiPhoneCall} from "@react-icons/all-files/fi/FiPhoneCall";
import { HiOutlineMailOpen } from "@react-icons/all-files/hi/HiOutlineMailOpen";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import {AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
const SubNavbar = () => {
    return (
        <div className='bg-accent grid grid-cols-3 py-2 shadow-sm'>
            <div className=' flex sm:col-span-1 lg:col-span-2 gap-8 pl-16'>
                <div className='flex items-center'>
                <FiPhoneCall className='mt-1 mr-2 text-orange-500 text-xl'/>
                <p>+(98) 888 7777</p>
            </div>
                <div className='flex items-center'>
                <HiOutlineMailOpen className='mt-1 mr-2 text-xl text-orange-500'/>
                <p>sample-email@example.com</p>
            </div>
            </div>
            <div className='ml-80 flex'>
                <FaFacebook className='mt-1 mr-2 text-2xl' />
                <AiFillTwitterCircle className='mt-1 mr-2 text-2xl' />
                <AiFillLinkedin className='mt-1 mr-2 text-2xl' />
                
            </div>
        </div>
    );
};

export default SubNavbar;