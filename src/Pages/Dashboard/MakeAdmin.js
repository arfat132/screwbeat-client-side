import React from 'react';
import Spinner from '../Spinner/Spinner';
import { useQuery } from 'react-query';
import User from './User';
const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://stormy-dusk-98977.herokuapp.com/users', {
        method: 'GET',

    }).then(res => res.json()));
    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://stormy-dusk-98977.herokuapp.com/users/${id}`;
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
        <div className='pt-12 px-12'>
            <h2 className="text-xl font-bold mb-2">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <User
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