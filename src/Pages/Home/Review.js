import React from 'react';

const Review = ({ review }) => {
    const { img, reviews, name, ratings } = review;
    return (
        <div className="p-4 md:w-1/3 w-full relative mb-12 lg:mb-0">
            <div className="h-full bg-primary bg-opacity-20 p-8 shadow-md border border-1 border-primary">
                <img alt="" src={img} className="w-24 h-24 -mt-20 mb-3 rounded-full flex-shrink-0 object-cover object-center border-2 border-primary" />
                <span className="title-font font-medium text-primary">{name}</span>
                <span className="text-yellow-400 text-medium float-right -mt-12">{ratings} out of 5</span>
                <p className="leading-relaxed mt-5">{reviews}</p>
            </div>
        </div>
    );
};

export default Review;