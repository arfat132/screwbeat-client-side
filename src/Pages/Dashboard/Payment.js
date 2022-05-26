import React from 'react';
import Spinner from '../Spinner/Spinner';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L1mOcDu5yL5XYbRIfzSnxzy8K6KQulgGFGnhiK8lH9NuKQDlegFIpe3OtKnqPm9LDWqBZyBLHtf3zOjiyZk8LS400YKAsgncW');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;

    const { data: orders, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
    }).then(res => res.json()));

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-12 pb-24 pt-12 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10">
                    <div className="p-4 md:w-1/2">
                        <div className="lg:h-[400px] sm:h-[700px] shadow-md rounded-md border border-gray-200">
                            <h1 className='font-bold text-2xl text-center pt-5'>Product Details</h1>
                            <div className='lg:flex sm:flex-none items-center'>
                                <img className="p-8 w-80 mx-auto" src={orders.img} alt="" />
                                <div className="px-5 ">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{orders.productName}</h5>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <span className="bg-orange-100 text-orange-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Quantity {orders.quantity}</span>

                                    </div>
                                    <p>{orders.description}</p>
                                    <div className="flex justify-between items-center relative bottom-0 mt-5">
                                        <span className="text-3xl font-bold text-gray-900 ">Total: ${orders.price * orders.quantity}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2">
                        <div className="lg:h-[400px] sm:h-[700px] shadow-md rounded-md border border-gray-200 text-start p-5">
                            <h1 className='font-bold text-2xl text-center mb-6 '>Order Details</h1>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm orders={orders} />
                            </Elements>
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;