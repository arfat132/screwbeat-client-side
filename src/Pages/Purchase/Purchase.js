import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Purchase = () => {
    const { id } = useParams();
    const [toolsDetails, setToolsDetails] = useState({});
    const [user] = useAuthState(auth);
    
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setToolsDetails(data))
    }, [id, toolsDetails])

    const addOrders = event => {
        console.log(event);
        event.preventDefault();
        const totalPrice = toolsDetails.quantity * toolsDetails.price
        console.log(totalPrice)
        const orderDetails = {
            name: user.displayName,
            email: user.email,
            price:totalPrice,
            productName: toolsDetails.name,
            address: event.target.address.value,
            quantity: Number(event.target.quantity.value),
            phone: event.target.phone.value,
            img: toolsDetails.img,
            description: toolsDetails.description
        }
        console.log(orderDetails)
        axios.post('http://localhost:5000/orders', orderDetails)
            .then(response => {
                console.log(response)
                const { data } = response;
                console.log(data.insertedId)
                if (data.insertedId) {
                    toast.success('Added Successfully!!!');
                    event.target.reset();
                }
                
            })

    };
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-12 pb-24 pt-12 mx-auto">
                <div class="flex flex-wrap -mx-4 -mb-10">
                    <div class="p-4 md:w-1/2">
                        <div class="lg:h-[400px] sm:h-[700px] shadow-md rounded-md border border-gray-200">
                            <h1 className='font-bold text-2xl text-center pt-5'>Product Details</h1>
                            <div className='lg:flex sm:flex-none items-center'>
                                <img class="p-8 w-80 mx-auto" src={toolsDetails.img} alt="" />
                                <div class="px-5 ">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900">{toolsDetails.name}</h5>
                                    <div class="flex items-center mt-2.5 mb-5">
                                        <span class="bg-orange-100 text-orange-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Stock {toolsDetails.quantity}</span>
                                        <span class="bg-orange-100 text-orange-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Min Order {toolsDetails.minOrderQuantity}</span>
                                    </div>
                                    <p>{toolsDetails.description}</p>
                                    <div class="flex justify-between items-center relative bottom-0 mt-5">
                                        <span class="text-3xl font-bold text-gray-900 ">${toolsDetails.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/2">
                        <div class="lg:h-[400px] sm:h-[700px] shadow-md rounded-md border border-gray-200 text-start p-5">
                            <h1 className='font-bold text-2xl text-center '>Order Details</h1>
                            <form onSubmit={addOrders}>
                                <div class="grid xl:grid-cols-2 xl:gap-6">
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" value={user?.displayName} readOnly />
                                    </div>
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" value={user?.email} readOnly />
                                    </div>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" name="address" id="address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" placeholder=" " required="" />
                                    <label for="address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="number" name="phone" id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" placeholder=" " required="" />
                                    <label for="phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                                </div>
                                <div class="grid xl:grid-cols-2 xl:gap-6">
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="number" name="price" id="price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" value={toolsDetails.price} readOnly />
                                    </div>
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="number" name="quantity" id="quantity" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" placeholder=" " required="" />
                                        <label for="quantity" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                                    </div>
                                </div>
                                <button type="submit" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;