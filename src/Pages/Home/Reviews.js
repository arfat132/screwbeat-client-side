import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="hero text-white body-font w-full bg-no-repeat bg-[url(https://plankandpillow.com/wp-content/uploads/2021/09/cfl-floor-lamp.jpg)] md:bg-[url(https://homedecorbliss.com/wp-content/uploads/2021/03/A-modern-living-room-with-lamp-and-end-tables.jpg)] lg:bg-[url(https://cdn8.bigcommerce.com/s-hqjg7u/product_images/uploaded_images/living-room-imagecrop.jpg)] my-24">
            <div className="hero-overlay bg-opacity-80 w-full"></div>
            <div className="container px-5 py-24 mx-auto">
                <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">Testimonials</h2>
                <h1 className="text-3xl font-medium title-font text-white mb-24 text-center">  Customers Reviews</h1>
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