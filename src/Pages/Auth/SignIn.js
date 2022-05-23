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

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [showPass, setShowPass] = useState(false);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    const forgetPassword = async () => {
        if (user?.email) {
            await sendPasswordResetEmail(user?.email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address');
        };
    }
    return (
        < div className="w-[450px] p-8 mx-auto border-2 border-orange-400 bg-gray-50 items-center text-center shadow-xl rounded-xl my-24">
            <h1 className='w-56 text-center rounded p-2 mx-auto mb-8 mt-[-50px] bg-primary text-white font-medium text-xl'>Sign In</h1>
            <div class="avatar mb-8">
                <div class="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
                <div className="text-center mb-3 pb-1 justify-between">
                    <label for="remember" class="text-sm font-medium text-primary mb-2">Don't have an account? <Link to='/signUp' className='hover:underline'>Sign Up</Link></label>
                    <br /> <button onClick={forgetPassword} className=" hover:underline text-gray-400 mt-3">Forgot password?</button>
                </div>
                <input
                    className="border border-gray-300 bg-primary text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5"
                    type="submit" />

            </form>
            <div className='flex font-bold items-center my-3 text-primary'>
                <hr className='border-primary h-px w-full mr-2 mt-1' />
                <span>or</span>
                <hr className='border-primary h-px w-full ml-2 mt-1' />
            </div>
            <button onClick={() => signInWithGoogle()} className="flex items-center justify-center bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 w-full p-2.5"> <img className='w-6 pr-2' src={GoogleLogo} alt='' /> Continue with Google</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignIn;