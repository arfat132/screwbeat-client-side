import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NewArrivalCard = ({ allProduct }) => {
    const { _id, img, price, name, minOrderQuantity, quantity } = allProduct;
    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/shopPurchase/${id}`);
    }
    return (
        <div className=''>
            <div class="card card-side bg-base-100 shadow-lg rounded-none">
                <img className='w-36 h-40' src={img} alt="" />
                <div class="card-body">
                    <h2 class="text-lg font-bold">{name.slice(0, 13)}..</h2>
                    <div className="flex items-center">
                        <span className="text-primary text-[12px] font-bold">Stock {quantity}</span>
                        <span className="text-primary text-[12px] font-bold ml-2 ">Min Order {minOrderQuantity}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div>
                        <span className="text-xl font-bold text-gray-900">${price}</span>
                      </div>
                        <div>
                        <button onClick={() => navigateToDetails(_id)} className='text-gray-900 text-2xl font-bold'><AiOutlineShoppingCart /></button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivalCard;