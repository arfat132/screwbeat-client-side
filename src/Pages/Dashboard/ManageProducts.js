import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";

const ManageProducts = () => {
    const [manageTools, setManageTools] = useState([]);

    useEffect(() => {
        fetch('https://stormy-dusk-98977.herokuapp.com/shop')
            .then(res => res.json())
            .then(data => setManageTools(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://stormy-dusk-98977.herokuapp.com/shop/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = manageTools.filter(manageTool => manageTool._id !== id);
                    setManageTools(remaining);
                })
        }
    }
    return (
        <div className="overflow-x-auto px-12 pt-28">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Min Order</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageTools.map((manageTool, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{manageTool.name}</td>
                                <td>${manageTool.price}</td>
                                <td>{manageTool.quantity}</td>
                                <td>{manageTool.minOrderQuantity}</td>
                                <td><button onClick={() => handleDelete(manageTool._id)} className="text-white font-bold rounded-lg text-xl  p-2.5 text-center bg-red-700 ml-2"><RiDeleteBin6Line /></button></td>
                            </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default ManageProducts;