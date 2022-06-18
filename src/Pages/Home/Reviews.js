import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://stormy-dusk-98977.herokuapp.com/reviews")
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="text-white body-font w-full lg:my-24 my-0">
            <div className="container px-5 py-0 lg:py-24 mx-auto">
                <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">Testimonials</h2>
                <h1 className="text-3xl font-medium title-font text-gray-800 mb-24 text-center">  Customers Reviews</h1>
                <div className="flex flex-wrap -m-4">
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;