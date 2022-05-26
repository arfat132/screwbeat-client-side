import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";

const ManagemanageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() => {
        fetch('https://stormy-dusk-98977.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://stormy-dusk-98977.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = manageOrders.filter(manageItem => manageItem._id !== id);
                    setManageOrders(remaining);
                })
        }
    }
    return (
        <div className="overflow-x-auto px-12 pt-12">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Payment Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageOrders.map((manageOrder, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{manageOrder.email}</td>
                                <td>{manageOrder.productName}</td>
                                <td>{manageOrder.price}</td>
                                <td>{manageOrder.quantity}</td>
                                <td>{manageOrder.quantity * manageOrder.price}</td>
                                <td>
                                    {(manageOrder.price && manageOrder.paid) && <button className="text-white font-medium rounded-lg text-md  px-2.5 py-1 text-center bg-orange-400 ml-2 uppercase">Pending</button>}
                                    {(manageOrder.price && !manageOrder.paid) && <button className="text-white font-medium rounded-lg text-md  px-2.5 py-1 text-center bg-blue-600 ml-2 uppercase">Unpaid</button>}
                                </td>
                                <td>
                                    {!manageOrder.paid && <button onClick={() => handleDelete(manageOrder._id)} className="text-white font-bold rounded-lg text-xl  p-2.5 text-center bg-red-700 ml-2"><RiDeleteBin6Line /></button>}
                                    {(manageOrder.price && manageOrder.paid) && <button onClick={() => handleDelete(manageOrder._id)} className="text-white font-bold rounded-lg text-xl  p-2.5 text-center bg-gray-700 ml-2" disabled><RiDeleteBin6Line /></button>}

                                </td>
                            </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default ManagemanageOrders;