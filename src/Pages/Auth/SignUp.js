import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import GoogleLogo from '../../Assests/google.svg';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
    const [updateProfile, updating, updatError] = useUpdateProfile(auth);
    const [showPass, setShowPass] = useState(false);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };

    const [token] = useToken(user || googleUser);


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
            toast.info('Sent email');
        }
        else {
            toast.info('Please enter your email address');
        };
    }

    return (
        < div className="w-[450px] p-8 mx-auto border-2 border-orange-400 bg-gray-50 items-center text-center shadow-xl rounded-xl my-24">
            <h1 className='w-56 text-center rounded p-2 mx-auto mb-8 mt-[-50px] bg-primary text-white font-medium text-xl'>Sign Up</h1>
            <div class="avatar mb-8">
                <div class="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder='Name'
                    {...register("name", { required: true })} />
                {errors.firstName?.type === 'required' && "Name is required"}
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
                    <label for="remember" class="text-sm font-medium text-primary mb-2">Already Have an account? <Link to='/signIn' className='hover:underline'>Sign In</Link></label>
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

export default SignUp;