import React from 'react';
import { useNavigate } from 'react-router-dom';

const Light = ({ light }) => {
    const { _id, img, price, name, description, minOrderQuantity, quantity } = light;
    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="p-4 md:w-1/4">
            <div className="h-[670px] border border-gray-200 relative">
                <img className="mb-5" src={img} alt="" />
                <div className="px-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-4 capitalize">{name}</h5>
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className="bg-primary bg-opacity-20 text-primary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Stock {quantity}</span>
                        <span className="bg-primary bg-opacity-20 text-primary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">Min Order {minOrderQuantity}</span>
                    </div>
                    <p>{description}</p>
                    <div className="flex justify-between items-center absolute bottom-4">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <button onClick={() => navigateToDetails(_id)} className='bg-primary text-white px-6 py-2 uppercase font-bold ml-28'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Light;