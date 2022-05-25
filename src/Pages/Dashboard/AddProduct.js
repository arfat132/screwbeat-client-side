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
        .then(res=>res.json())
            .then(result => {
            console.log(result)
            if(result.success){
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
                      fetch('http://localhost:5000/tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                           
                        },
                        body: JSON.stringify(tools)
                    })
                    .then(res =>res.json())
                    .then(inserted =>{
                        if(inserted.insertedId){
                            toast.success('Product added successfully')
                                                    }
                        else{
                            toast.error('Failed to add the doctor');
                        }
                    })
    
                }
                
            })
    }
  
    return (
        <div className='px-12 py-12 mx-12 mt-12 shadow-md border border-gray-100'>
            <h1 className='mb-5 font-bold text-2xl'>Add a Product</h1>
            <hr className='py-5' />
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-6">
                    <label for="name" class="w-80 mb-2 text-sm font-medium text-gray-900 ">Product Name</label>
                    <input {...register("name")} type="name" id="name" class="mr-72 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div class="mb-6">
                    <label for="price" class="w-80 mb-2 text-sm font-medium text-gray-900 ">Price</label>
                    <input {...register("price")} type="number" id="price" class="mr-72 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div class="mb-6">
                    <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 ">Stock</label>
                    <input {...register("quantity")} type="number" id="quantity" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div class="mb-6">
                    <label for="minOrderQuantity" class="block mb-2 text-sm font-medium text-gray-900 ">Minimum Order</label>
                    <input {...register("minOrderQuantity")} type="number" id="minOrderQuantity" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div class="mb-6">
                    <label for="imageFile" class="block mb-2 text-sm font-medium text-gray-900 ">Image</label>
                    <input {...register("image")} type="file" id="imageFile" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div class="mb-6">
                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <textarea {...register("description")} name="description" id="" cols="30" rows="10" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"></textarea>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;