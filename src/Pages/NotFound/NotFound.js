import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center mx-auto'>
        <img className='mx-auto w-90' src="https://i.ibb.co/HgDFSbV/error-404-page-3100465-2582986.png" alt="" />
        <h3 className='text-red-500 font-bold text-xl uppercase mb-6 -mt-10'>Page not found</h3>
        <p>The page you are looking for doesn`t exist or an error occurred.</p>
        <p>Go back or head over to choose a new direction</p>
        <button className="text-white my-6 bg-primary font-bold uppercase rounded-lg text-sm px-5 py-2.5 text-center" onClick={()=>navigate('/')}>Home</button>
    </div>
    );
};

export default NotFound;