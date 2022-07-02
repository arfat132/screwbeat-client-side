import React, { useEffect, useState } from 'react';
import Product from '../Product';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
const Ceiling = () => {
    const [ceiling, setCeiling] = useState([]);
    const [limit, setLimit] = useState(4);
    const [pageNumber, setPageNumber] = useState(0)
    const [sort, setSort] = useState("Featured");

    useEffect(() => {
        fetch(`https://stormy-dusk-98977.herokuapp.com/shop`)
            .then(res => res.json())
            .then(data => setCeiling(data.filter(lamp => lamp.category.includes('ceiling'))))
    }, [ceiling, limit, pageNumber])
    return (
        <div>
            <div className='w-full mt-4 mb-4'>
                <div className="">
                    <div className="">
                        <div className="lg:max-w-[1440px] relative inset-0 md:max-w-[744px] max-w-[375px] mx-auto">
                            <div className="relative">
                                <img src="https://i.ibb.co/Ld03g0s/sss.png" alt='' className="w-full object-cover lg:h-[330px] lg:block md:hidden hidden" />
                                <div className="w-full h-full absolute top-0 left-0" />
                                <img src="https://i.ibb.co/Ld03g0s/sss.png" alt='' className="lg:hidden md:block hidden" />
                                <img src="https://i.ibb.co/Ld03g0s/sss.png" alt='' className="lg:hidden md:hidden block" />
                                <div className="absolute lg:bottom-8 md:bottom-3 bottom-0 lg:px-7 md:px-10 px-4 py-4 ">
                                    <p className="lg:text-4xl md:text-2xl text-lgp font-bold leading-9 text-white">We are the Different Types of</p>
                                    <h1 className="mb-5 lg:text-4xl text-lg font-bold text-white">Lamps Menufacturer
                                    </h1>
                                    <p className="lg:block hidden md:block text-base font-medium leading-none text-gray-800 bg-white px-2 py-2 max-w-[142px] mt-3 text-center">50% discount !!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between bg-gray-200 bg-opacity-60 mt-4 mx-0 md:mx-6'>
                <div className='flex items-center ml-4  text-gray-500'>Paginate by
                    <select onChange={(e) => setLimit(e.target.value)} className="py-2 px-2 ml-3 bg-primary text-white hover:border-none rounded-none">
                        <option>4</option>
                        <option>8</option>
                        <option>12</option>
                        <option>16</option>
                        <option>20</option>
                    </select></div>
                <div className="lg:hidden flex items-center">
                    <h2 className='text-xl  text-gray-500'>Category</h2>
                    <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <AiOutlineMenuUnfold className='text-2xl text-primary' />
                    </label>
                </div>
            </div>

            <div className="text-gray-600 body-font pt-8 auto">
                <div className="container px-12 pb-16 mx-auto">
                    {ceiling?.length ?
                        <div className="flex flex-wrap -m-4 mb-6">
                            {
                                ceiling.map(allProduct => <Product
                                    key={allProduct._id}
                                    allProduct={allProduct}
                                ></Product>)
                            }
                        </div>
                        :
                        <div><p className='text-center my-[232px]'>No Product Found</p></div>

                    }

                    <div className='mx-auto text-center mb-6 "inline-flex items-center -space-x-px'>
                        {
                            [...Array(5).keys()].map(number => <div onClick={() => setPageNumber(number)} className={`inline-flex items-center -space-x-px py-2 px-3 leading-tight text-white bg-primary border border-gray-300 ${pageNumber === number ? "bg-primary" : "bg-gray-300 text-primary"}`}>

                                {number + 1}</div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ceiling;