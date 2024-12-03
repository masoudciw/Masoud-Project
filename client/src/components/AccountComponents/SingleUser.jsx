import React from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_USER } from '../../utils/queries';
import { GET_USERS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { DELETE_USER } from '../../utils/mutations';
import { UPDATE_USER_TYPE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import useTitle from '../../hooks/useTitle';
import './singleUser.css';

const SingleUser = () => {


    const { userId, userType } = useParams();
    useTitle(`Masoud | User: ${userId} `);
    const navigate = useNavigate();
    const [deleteUser, { error }] = useMutation(DELETE_USER, {
        refetchQueries: [
            GET_USERS,
            'users'
        ]
    }, { variables: { userId: userId } });
    const [updateUserType, { status }] = useMutation(UPDATE_USER_TYPE, { variables: { userId: userId, userType: userType } });

    const handleDeleteUser = async (userId) => {
        navigate("/account/users");
        alert('User Deleted Successfully');
        try {
            const { data } = await deleteUser({
                variables: { userId },
            });
        } catch (err) {
            console.error(err);
        }
    };


    const handleUpdateUserType = async (userId, userType) => {
        navigate("/account");
        alert('User Type Updated Successfully!');
        try {
            const { data } = await updateUserType({
                variables: { userId, userType },
            });
        } catch (err) {
            console.error(err);
        }
    };

    const { loading, data } = useQuery(QUERY_SINGLE_USER, {
        variables: { userId: userId },
    });

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className='userBox'>
                <form className='userContainer'>
                    <div class="form-group row">
                        <label for="inputUserId">User ID</label>
                        <div class="col-sm-10">
                            <input type="text" name='userId' disabled class="form-control" id="inputUserId" placeholder={userId} />
                        </div>
                        <label for="inputUsername">Username</label>
                        <div class="col-sm-10">
                            <input type="text" name='username' disabled class="form-control" id="inputUsername" placeholder={data.user.username} />
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail">User Email</label>
                            <div class="col-sm-10">
                                <input type="email" name='newEmail' disabled class="form-control" id="inputEmail" placeholder={data.user.email} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputUserType">User Type</label>
                            <div class="col-sm-10">
                                <input type="userType" name='reapetNewEmail' disabled class="form-control" id="inputUserType" placeholder={data.user.userType} />
                            </div>
                            {
                                data.user.userType === "USER" ?
                                    (
                                        <>
                                            <div class="col-sm-10">
                                                <button type="submit" onClick={() => handleUpdateUserType(userId, data.user.userType)} class="btn btn-primary">Change User Type</button>
                                            </div>

                                            <div class="col-sm-10">
                                                <button type='submit' onClick={() => handleDeleteUser(userId)} class="btn btn-danger">Delete User</button>
                                            </div>
                                        </>
                                    ) : null
                            }

                        </div>
                    </div>
                </form >
            </div >
        </>
    );
};

export default SingleUser;