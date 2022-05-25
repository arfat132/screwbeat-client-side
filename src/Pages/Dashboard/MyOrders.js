import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import axios from 'axios';
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {

        const getOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/orders?email=${email}`;

            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();

    }, [user, orders])

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    orders(remaining);
                });
        };
    };
    return (
        <div class="overflow-x-auto px-12 pt-12">
            <table class="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                        <th>Transaction id</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{order.email}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.quantity * order.price}</td>
                                <td> {!order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className="text-white font-bold rounded-lg text-md  px-2 py-2 uppercase text-center bg-blue-800 ml-2">Pay</button></Link>}
                                    {(order.price && order.paid) && <p><span className="text-white font-bold rounded-lg text-md  px-2 py-2 uppercase text-center bg-green-600 ml-2">Paid</span></p>}
                                </td>
                                <td> 
                                    {(order.price && order.paid) && <p><span className='text-gray-900 font-bold'>{order.transactionId}</span></p>}
                                </td>
                                <td>
                                {!order.paid &&  <button onClick={() => handleDelete(order._id)} className="text-white font-bold rounded-lg text-xl  p-2.5 text-center bg-red-700 ml-2"><RiDeleteBin6Line /></button>}
                                    {(order.price && order.paid) && <button onClick={() => handleDelete(order._id)} className="text-white font-bold rounded-lg text-xl  p-2.5 text-center bg-gray-700 ml-2" disabled><RiDeleteBin6Line /></button>}
                                    
                                </td>
                            </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyOrders;