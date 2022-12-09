import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useForm } from 'react-hook-form';
import { FaStar } from 'react-icons/fa';


const AddReviews = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = async data => {

        const reviews = {
            name: user.displayName,
            reviews: data.reviews,
            ratings: data.ratings,
        }

        console.log(reviews)
        // send to database 
        fetch('https://outlight-server-side.vercel.app/reviews', {
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

    const colors = {
        orange: "#d97706",
        gray: "#a9a9a9"
    }
    const stars = Array(5).fill(0)
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClickValue = (value) => {
        setCurrentValue(value)
    }
    const handleMouseOver = (value) => {
        setHoverValue(value)
    }
    const handleMouseLeave = (value) => {
        setHoverValue(undefined)
    }
    return (
        <div className='px-12 py-12 mx-12 mt-36 shadow-md border border-gray-100 md:w-[600px]'>
            <h1 className='mb-5 font-bold text-2xl'>Give Review</h1>
            <hr className='py-5' />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label htmlFor="ratings" className="block mb-2 text-sm font-medium text-gray-900 ">Ratings</label>
                    <div className='flex'>
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={24}
                                    style={{
                                        marginRight: 10,
                                        cursor: "pointer"
                                    }}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.gray}
                                    onClick={() => handleClickValue(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                ></FaStar>
                            )
                        })}
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="reviews" className="block mb-2 text-sm font-medium text-gray-900 ">Review</label>
                    <textarea {...register("reviews")} name="reviews" id="" cols="10" rows="4" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"></textarea>
                </div>
                <button type="submit" className="text-white bg-primary  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Review</button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};


export default AddReviews;