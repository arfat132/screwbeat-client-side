import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useForm } from 'react-hook-form';


const AddReviews = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = async data => {

        const reviews = {
            name: user.displayName,
            img: user.photoURL,
            reviews: data.reviews,
            ratings: data.ratings,
        }

        console.log(reviews)
        // send to database 
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Review Send Successfully')

                }
            })

    };


    // const handleAddReviews = event => {
    //     console.log(event);
    //     event.preventDefault();
    //     const reviews = {
    //         name: user.displayName,
    //         img: user.photoURL,
    //         reviews: event.target.reviews.value,
    //         ratings: event.target.ratings.value,
    //     }
    //     console.log(reviews)

    //     axios.post('http://localhost:5000/reviews', reviews)
    //         .then(response => {
    //             console.log(response)
    //             const { data } = response;
    //             console.log(data.insertedId)
    //             if (data.insertedId) {
    //                 toast.success('Review Send Successfully');
    //                 event.target.reset();
    //             }
    //         })

    // };
    return (
        <div className='px-12 py-12 mx-12 mt-12 shadow-md border border-gray-100'>
            <h1 className='mb-5 font-bold text-2xl'>Give Review</h1>
            <hr className='py-5' />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label htmlFor="name" className="w-80 mb-2 text-sm font-medium text-gray-900 ">Name</label>
                    <input type="name" id="name" value={user?.displayName} className="mr-72 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div className="mb-6">
                    <label htmlFor="img" className="w-80 mb-2 text-sm font-medium text-gray-900 ">Image Url</label>
                    <input type="text" id="img" value={user?.photoURL} className="mr-72 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div className="mb-6">
                    <label htmlFor="ratings" className="block mb-2 text-sm font-medium text-gray-900 ">Ratings</label>
                    <input
                        type="number"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        {...register
                            ("ratings", {
                                required: {
                                    value: true,
                                    message: 'quantity is Required'
                                },
                                max: {
                                    value: 5,
                                    message: 'Maximum rate 5'
                                },
                                min: {
                                    value: 0,
                                    message: 'Minimum rate 0'
                                }
                            })}
                    />
                    <label className="label">
                        {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                        {errors.ratings?.type === 'max' && <span className="label-text-alt text-red-500">{errors?.ratings?.message}</span>}
                        {errors.ratings?.type === 'min' && <span className="label-text-alt text-red-500">{errors?.ratings?.message}</span>}
                    </label>
                </div>
                <div className="mb-6">
                    <label htmlFor="reviews" className="block mb-2 text-sm font-medium text-gray-900 ">Review</label>
                    <textarea {...register("reviews")} name="reviews" id="" cols="10" rows="4" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Review</button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddReviews;