import React, { useState } from 'react';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { set } from 'react-hook-form';

const AddReviews = () => {
    const [user] = useAuthState(auth);
    
    const handleAddReviews = event => {
        console.log(event);
        event.preventDefault();
        const reviews = {
            name: user.displayName,
            img: event.target.img.value,
            reviews: event.target.reviews.value,
            ratings: event.target.ratings.value,
        }
        console.log(reviews)

        axios.post('http://localhost:5000/reviews', reviews)
            .then(response => {
                console.log(response)
                const { data } = response;
                console.log(data.insertedId)
                if (data.insertedId) {
                    toast.success('Review Send Successfully');
                    event.target.reset();
                }
            })

    };
    return (
        <div className='px-12 py-12 mx-12 mt-12 shadow-md border border-gray-100'>
        <h1 className='mb-5 font-bold text-2xl'>Give Review</h1>
        <hr className='py-5' />
        <form onSubmit={handleAddReviews}>
            <div class="mb-6">
                <label for="name" class="w-80 mb-2 text-sm font-medium text-gray-900 ">Name</label>
                <input type="name" id="name" value={user?.displayName} class="mr-72 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div class="mb-6">
                <label for="img" class="w-80 mb-2 text-sm font-medium text-gray-900 ">Image Url</label>
                <input type="text" id="img" class="mr-72 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div class="mb-6">
                <label for="ratings" class="block mb-2 text-sm font-medium text-gray-900 ">Ratings</label>
                <input type="text" id="ratings" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div class="mb-6">
                <label for="reviews" class="block mb-2 text-sm font-medium text-gray-900 ">Review</label>
                <textarea name="reviews" id="" cols="20" rows="10" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"></textarea>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
        </form>
        <ToastContainer></ToastContainer>
    </div>
    );
};

export default AddReviews;