import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Product = ({ allProduct }) => {
    const { _id, img, price, name, minOrderQuantity, quantity } = allProduct;
    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/shopPurchase/${id}`);
    }
    return (
        <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="border border-gray-200 relative">
                <img className="mb-5" src={img} alt="" />
                <div className="px-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-4 capitalize">{name}</h5>
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className="bg-primary bg-opacity-20 text-primary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Stock {quantity}</span>
                        <span className="bg-primary bg-opacity-20 text-primary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">Min Order {minOrderQuantity}</span>
                    </div>
                    <div className="flex justify-between items-center mt-5 mb-2">
                        <div>
                            <span className="text-3xl font-bold text-gray-900">${price}</span>
                        </div>
                        <div>
                            <button onClick={() => navigateToDetails(_id)} className='text-gray-900 py-2 text-4xl font-bold'><AiOutlineShoppingCart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;