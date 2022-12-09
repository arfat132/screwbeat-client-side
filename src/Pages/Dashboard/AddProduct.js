import React from 'react';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const imgbbKey = '9efab692aa2cc1c59c9d20a10a3f6419';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    const img = result.data.url;
                    const tools = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        minOrderQuantity: data.minOrderQuantity,
                        img: img,
                        quantity: data.quantity
                    }
                    console.log(tools)
                    // send to database 
                    fetch('https://outlight-server-side.vercel.app/tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(tools)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                            }
                            else {
                                toast.error('Failed to add the Product');
                            }
                        })

                }

            })
    }

    return (
        <div className='px-8 py-6 mx-4 md:mx-12 lg:mx-12 mt-36 shadow-md border border-gray-100  md:w-[650px] lg:w-[650px] mb-10'>
            <h1 className='mb-5 font-bold text-2xl'>Add a Product</h1>
            <hr className='py-2' />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="w-80 file:text-sm font-medium text-gray-900 ">Product Name</label>
                    <input {...register("name")} type="name" id="name" className="mr-72 mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div className='flex flex-wrap items-center'>
                    <div className="mb-3 w-1/2 pr-2">
                        <label htmlFor="price" className="w-80 text-sm font-medium text-gray-900 ">Price</label>
                        <input {...register("price")} type="number" id="price" className="mr-72 mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                    <div className="mb-3 w-1/2 pl-2">
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-900 ">Stock</label>
                        <input {...register("quantity")} type="number" id="quantity" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                </div>
                <div className='flex flex-wrap items-center'>
                    <div className="mb-3 w-1/2 pr-2">
                        <label htmlFor="minOrderQuantity" className="block text-sm font-medium text-gray-900 ">Minimum Order</label>
                        <input {...register("minOrderQuantity")} type="number" id="minOrderQuantity" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                    <div className="mb-3 w-1/2 pl-2">
                        <label htmlFor="imageFile" className="block text-sm font-medium text-gray-900 ">Image</label>
                        <input {...register("image")} type="file" id="imageFile" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-900 ">Description</label>
                    <textarea {...register("description")} name="description" id="" cols="10" rows="5" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"></textarea>
                </div>
                <button type="submit" className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Product</button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;