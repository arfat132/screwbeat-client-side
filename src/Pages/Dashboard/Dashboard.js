import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile  z-0">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                  
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-orange-50 text-base-content">
                         <li><Link to="/dashboard">My Profile</Link></li>
                        <li><Link to="/dashboard/orders">My Orders</Link></li>
                        <li><Link to="/dashboard/review">Add Reviews</Link></li>
                        <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                        <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                        <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;