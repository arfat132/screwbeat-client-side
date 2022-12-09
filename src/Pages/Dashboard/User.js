import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";

const User = ({ user, refetch, handleDelete }) => {

    const { email, _id, role } = user;

    const makeAdmin = () => {
        fetch(`https://outlight-server-side.vercel.app/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <tr>
            <th>1</th>
            <td>{_id}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn text-white bg-primary">Make Admin</button>}</td>
            <td><button className="text-white font-bold rounded-lg text-xl  p-2.5 text-center bg-red-700 ml-2"><RiDeleteBin6Line /></button></td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default User;