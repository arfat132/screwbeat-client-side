import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, img, price, name, description, minOrderQuantity, quantity } = tool;
    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-[550px] shadow-md rounded-md border border-gray-200">
                <img className="p-8 w-80 mx-auto" src={img} alt="" />
                <div className="px-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{name}</h5>
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className="bg-orange-100 text-orange-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Stock {quantity}</span>
                        <span className="bg-orange-100 text-orange-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Min Order {minOrderQuantity}</span>
                    </div>
                    <p>{description}</p>
                    <div className="flex justify-between items-center relative bottom-0 mt-5">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <button onClick={() => navigateToDetails(_id)} className='bg-primary text-white px-6 py-2 uppercase font-bold rounded-lg'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;