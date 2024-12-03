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
            <div className='users'>
                {data.users.map((user) => (
                    <div className="usersInformationBox">
                        <div key={user._id}>
                            <div className='usersList'>
                                <ul>
                                    <li><span>User ID: </span><p>{user._id}</p></li>
                                    <li><span>Username: </span><p>{user.username}</p></li>
                                    <li><span>Email: </span><p>{user.email}</p></li>
                                    <li><span>User Type: </span><p>{user.userType}</p></li>
                                    <li><Link to={user._id} className='viewButton'>Delete / Edit</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Users;