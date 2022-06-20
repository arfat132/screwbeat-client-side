import React, { useEffect, useState } from 'react';
import NewArrivalCard from './NewArrivalCard';

const NewArrivals = () => {
    const [allProducts, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/shop")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div class="text-center">
            <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">New Arrivals</h2>
                <h1 className="lg:text-3xl text-xl font-medium title-font text-gray-900 mb-12 text-center">Explore Our New Arrivals Lamps</h1>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-5 lg:px-12 lg:mb-24'>
                <div className='cols-span-1 px-5 lg:px-0 mb-7 lg:mb-0'>
                    <img className='md:w-full h-[585px]' src="https://ae01.alicdn.com/kf/H2c3c67a357c24e6893cf740b7bd24dadR/Simple-American-Ceramic-Table-Lamp-Living-Room-Bedroom-Study-Bedside-Lamp-Led-Table-Lamp-Simple-Modern.jpg" alt="" />
                </div>
                <div className='col-span-3'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5 lg:px-0'>
                        {
                            allProducts.slice(-9).map(allProduct => <NewArrivalCard
                                key={allProduct._id}
                                allProduct={allProduct}
                            ></NewArrivalCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;