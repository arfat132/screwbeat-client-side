import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile  z-0">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-orange-50 text-base-content">
                        <li className='font-bold text-2xl'>Dashboard</li>
                        <li><Link to="/dashboard">My Profile</Link></li>
                        {(user && !admin) && <>
                            <li><Link to="/dashboard/orders">My Orders</Link></li>
                            <li><Link to="/dashboard/review">Add Reviews</Link></li>
                        </>}
                        {admin && <>
                            <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                            <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                            <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                            <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;