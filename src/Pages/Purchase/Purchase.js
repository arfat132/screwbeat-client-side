import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
const Purchase = () => {
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [toolsDetails, setToolsDetails] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setToolsDetails(data))
    }, [id, toolsDetails])

    const onSubmit = async data => {

        const orderDetails = {
            name: user.displayName,
            email: user.email,
            price: toolsDetails.price,
            productName: toolsDetails.name,
            address: data.address,
            quantity: Number(data.quantity),
            phone: data.phone,
            img: toolsDetails.img,
            description: toolsDetails.description,
            minOrderQuantity: toolsDetails.minOrderQuantity
        }

        console.log(orderDetails)
        // send to database 
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Added successfully')
                }
                else {
                    toast.error('Failed to add');
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="grid xl:grid-cols-2 xl:gap-6">
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input {...register("name")} type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" value={user?.displayName} readOnly />
                                    </div>
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input {...register("email")} type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" value={user?.email} readOnly />
                                    </div>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input {...register("address")} type="text" name="address"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" placeholder=" " required="" />
                                    <label for="address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input {...register("phone")} type="number" name="phone"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" placeholder=" " required="" />
                                    <label for="phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                                </div>
                                <div class="grid xl:grid-cols-2 xl:gap-6">
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input {...register("price")} type="number" name="price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" value={toolsDetails.price} readOnly />
                                    </div>
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input
                                            type="number"
                                            name="quantity"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" 
                                            {...register("quantity", {
                                                required: {
                                                    value: true,
                                                    message: 'quantity is Required'
                                                },
                                                max: {
                                                    value: 103,
                                                    message: 'error message' 
                                                  }
                                            },
                                                {
                                                    min: {
                                                        value: 12,
                                                        message: 'error message' 
                                                      }
                                                },

                                            )}
                                           />
                                        <label className="label">
                                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                            {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                            {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                        </label>
                                        <label for="quantity" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                                    </div>
                                </div>
                                <button disabled={errors.quantity} type="submit" class="text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
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