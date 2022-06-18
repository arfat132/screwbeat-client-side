import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
const Shop = () => {
    return (
        <div>
            <div>
                <div className="drawer drawer-mobile ">
                    <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <div className="content">
                            <Outlet />
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-50 text-base-content">
                            <li className='font-medium text-xl bg-primary pr-20 pl-2 py-1 text-white mb-2'>Category</li>
                            <li className='text-md -mb-3'><Link to="/shop"><IoIosArrowForward/>All Lamp</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/floor"><IoIosArrowForward/>Floor Lamp</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/lampset"><IoIosArrowForward/>Lamp set</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/ceiling"><IoIosArrowForward/>Ceiling Lamp</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;