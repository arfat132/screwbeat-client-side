import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
const Shop = () => {
    return (
        <div>
            <div>
                <div className="drawer drawer-mobile pt-20">
                    <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <div className="content">


                            <Outlet />
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4  w-48 bg-white overflow-y-auto w-50 text-base-content">
                            <li className='font-medium text-xl bg-primary lg:pr-20 pl-2 lg:py-1 text-white mb-2'>Category</li>
                            <li className='text-md -mb-3'><Link to="/shop"><IoIosArrowForward/>All Lamp</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/floor"><IoIosArrowForward/>Floor Lamp</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/lampSet"><IoIosArrowForward/>Lamp set</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/ceiling"><IoIosArrowForward />Ceiling Lamp</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/table"><IoIosArrowForward/>Table Lamp</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/bedroom"><IoIosArrowForward />Bedroom Lamp</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/restaurant"><IoIosArrowForward/>Restaurant Lamp</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;