import React from 'react';
import Spinner from '../Spinner/Spinner';
import { useQuery } from 'react-query';
import User from './User';
const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
       
    }).then(res => res.json()));
    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = users.filter(user => user._id !== id);
                    users(remaining);
                });
        };
    };
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
                               handleDelete={handleDelete}
                           ></User>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;