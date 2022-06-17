import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import GoogleLogo from '../../Assests/google.svg';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../Spinner/Spinner'
import useToken from '../../Hooks/useToken';

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [showPass, setShowPass] = useState(false);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    const [token] = useToken(user || googleUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);


    const forgetPassword = async () => {
        if (user?.email) {
            await sendPasswordResetEmail(user?.email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address');
        };
    }
    if (loading || googleLoading) {
        return <Spinner></Spinner>
    }

    if (error || googleError) {
        signInError = <p className='text-red-500 mb-2'><small>{error?.message || googleError?.message}</small></p>
    }
    return (
        <div className='h-min-screen hero bg-[url(https://www.wunschlicht.com/en-gb/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/i/vistosi-armonia-sp-05_2.jpg)] pt-48 pb-16'>
            <div className='w-full lg:pl-24'>
                < div className="lg:w-[450px] mx-4 lg:mx-0 items-center text-center p-8 border-2 border-primary bg-gray-50 shadow-xl rounded-xl">
                    <div className="avatar mb-8 -mt-24">
                        <div className="w-36 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            placeholder='Email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                        <div className='relative'>
                            <input
                                placeholder="Password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                type={showPass ? "text" : "password"}
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Must be 8 characters'
                                    }
                                })}
                            />
                            <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <div className="text-center mb-3 pb-1 justify-between">
                            <label htmlFor="remember" className="text-sm font-medium text-primary mb-2">Don't have an account? <Link to='/signUp' className='hover:underline'>Sign Up</Link></label>
                            <br /> <button onClick={forgetPassword} className=" hover:underline text-gray-400 mt-3">Forgot password?</button>
                        </div>
                        <input
                            className="border border-gray-300 bg-primary text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5"
                            type="submit" value="Sign In" />

                    </form>
                    <div className='flex font-bold items-center my-3 text-primary'>
                        <hr className='border-primary h-px w-full mr-2 mt-1' />
                        <span>or</span>
                        <hr className='border-primary h-px w-full ml-2 mt-1' />
                    </div>
                    <button onClick={() => signInWithGoogle()} className="flex items-center justify-center bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 w-full p-2.5"> <img className='w-6 pr-2' src={GoogleLogo} alt='' /> Continue with Google</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default SignIn;