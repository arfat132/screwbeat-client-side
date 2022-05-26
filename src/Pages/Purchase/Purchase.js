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
        fetch(`https://stormy-dusk-98977.herokuapp.com/tools/${id}`)
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
        fetch('https://stormy-dusk-98977.herokuapp.com/orders', {
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
        <section className="text-gray-600 body-font">
            <div className="container px-12 pb-24 pt-12 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10">
                    <div className="p-4 md:w-1/2">
                        <div className="lg:h-[400px] sm:h-[700px] shadow-md rounded-md border border-gray-200">
                            <h1 className='font-bold text-2xl text-center pt-5'>Product Details</h1>
                            <div className='lg:flex sm:flex-none items-center'>
                                <img className="p-8 w-80 mx-auto" src={toolsDetails.img} alt="" />
                                <div className="px-5 ">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{toolsDetails.name}</h5>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <span className="bg-orange-100 text-orange-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Stock {toolsDetails.quantity}</span>
                                        <span className="bg-orange-100 text-orange-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Min Order {toolsDetails.minOrderQuantity}</span>
                                    </div>
                                    <p>{toolsDetails.description}</p>
                                    <div className="flex justify-between items-center relative bottom-0 mt-5">
                                        <span className="text-3xl font-bold text-gray-900 ">${toolsDetails.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2">
                        <div className="lg:h-[400px] sm:h-[700px] shadow-md rounded-md border border-gray-200 text-start p-5">
                            <h1 className='font-bold text-2xl text-center '>Order Details</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid xl:grid-cols-2 xl:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input {...register("name")} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" value={user?.displayName} readOnly />
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input {...register("email")} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" value={user?.email} readOnly />
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input {...register("address")} type="text" name="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" placeholder=" " required="" />
                                    <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input {...register("phone")} type="number" name="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" placeholder=" " required="" />
                                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                                </div>
                                <div className="grid xl:grid-cols-2 xl:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input {...register("price")} type="number" name="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer" value={toolsDetails.price} readOnly />
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input
                                            type="number"
                                            name="quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer"
                                            {...register
                                                ("quantity", {
                                                    required: {
                                                        value: true,
                                                        message: 'quantity is Required'
                                                    },
                                                    max: {
                                                        value: toolsDetails.quantity,
                                                        message: 'Tools not available at this quantity'
                                                    },
                                                    min: {
                                                        value: 12,
                                                        message: 'Please purchase at 12 pieces'
                                                    }
                                                })}
                                        />
                                        <label className="label">
                                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                            {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors?.quantity?.message}</span>}
                                            {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors?.quantity?.message}</span>}
                                        </label>
                                        <label htmlFor="quantity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                                    </div>
                                </div>
                                <button disabled={errors.quantity} type="submit" className="text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
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