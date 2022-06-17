import React from 'react';
import { GoCalendar } from 'react-icons/go';

const Blog = ({blog}) => {
    const { name, img, description } = blog;

    return (
        <div className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden lg:flex">
                <div>
                <img className="h-56 w-[700px] object-cover object-center" src={img} alt="blog" />
                </div>
                <div className="p-6">
                    <h2 className="tracking-widest text-xl title-font font-medium text-primary mb-2 flex items-center"><GoCalendar /><span className='text-sm ml-2'> 12 June 2022</span></h2>
                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3">{name}</h1>
                    <p className="leading-relaxed mb-3">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;