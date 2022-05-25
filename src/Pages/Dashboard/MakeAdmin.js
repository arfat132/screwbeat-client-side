import React from 'react';
import Spinner from '../Spinner/Spinner';
import { useQuery } from 'react-query';
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";
import { toast } from 'react-toastify';
import User from './User';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Spinner></Spinner>
    }
 
return (
    <div>
    <h2 className="text-2xl">All Users: {users.length}</h2>
    <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
            </thead>
            <tbody>
               {
                   users.map(user=><User
                   key={user._id}
                   user={user}
                   refetch={refetch}
                   ></User>)
               }
            </tbody>
        </table>
    </div>
</div>
);
};

export default MakeAdmin;