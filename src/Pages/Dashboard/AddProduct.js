import React from 'react';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AddProduct = () => {

    const handleAddProduct = event => {
        console.log(event);
        event.preventDefault();
        const tools = {
            name: event.target.name.value,
            price: event.target.price.value,
            description: event.target.description.value,
            minOrder: event.target.minOrder.value,
            stock: event.target.stock.value
        }
        console.log(tools)
        axios.post('http://localhost:5000/tools', tools)
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
        <div className='px-12 py-12 mx-12 mt-12 shadow-md border border-gray-100'>
            <h1 className='mb-5 font-bold text-2xl'>Add a Product</h1>
            <hr className='py-5' />
            <form onSubmit={handleAddProduct}>
                <div class="mb-6">
                    <label for="name" class="w-80 mb-2 text-sm font-medium text-gray-900 ">Product Name</label>
                    <input type="name" id="name" class="mr-72 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div class="mb-6">
                    <label for="price" class="w-80 mb-2 text-sm font-medium text-gray-900 ">Price</label>
                    <input type="number" id="price" class="mr-72 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div class="mb-6">
                    <label for="stock" class="block mb-2 text-sm font-medium text-gray-900 ">Stock</label>
                    <input type="number" id="stock" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div class="mb-6">
                    <label for="minOrder" class="block mb-2 text-sm font-medium text-gray-900 ">Minimum Order</label>
                    <input type="number" id="minOrder" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div class="mb-6">
                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <textarea name="description" id="" cols="30" rows="10" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"></textarea>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;