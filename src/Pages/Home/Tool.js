import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const {_id, img, price, name, description, minOrderQuantity, quantity } = tool;
    const navigate = useNavigate();

    const navigateToDetails = id =>{
        navigate(`/purchase/${id}`);
    }
    return (
        <div class="p-4 md:w-1/3">
            <div class="h-[550px] shadow-md rounded-md border border-gray-200">
                <img class="p-8 w-80 mx-auto" src={img} alt="product image" />
                <div class="px-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900">{name}</h5>
                    <div class="flex items-center mt-2.5 mb-5">
                        <span class="bg-orange-100 text-orange-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Stock {quantity}</span>
                        <span class="bg-orange-100 text-orange-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Min Order {minOrderQuantity}</span>
                    </div>
                    <p>{description}</p>
                    <div class="flex justify-between items-center relative bottom-0 mt-5">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <button onClick={() => navigateToDetails(_id)} className='bg-primary text-white px-6 py-2 uppercase font-bold rounded-lg'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;