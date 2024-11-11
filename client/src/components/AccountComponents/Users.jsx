import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import './users.css';


const Users = () => {

    useTitle("Masoud | Users");

    const { loading, data } = useQuery(GET_USERS);
    if (loading) {
        return <h3>Users Are Loading...</h3>;
    }

    return (
        <>
            {data.users.map((user) => (
                <div className='users'>
                    <div key={user._id}>
                        <table>
                            <thead>
                                <tr>
                                    <td><span>Username:</span></td>
                                    <td><span>Email:</span></td>
                                    <td><span>User Type:</span></td>
                                    <td><Link to={user._id} className='viewButton'>Delete / Edit</Link></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>{user.username}</p></td>
                                    <td><p>{user.email}</p></td>
                                    <td><p>{user.userType}</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Users;