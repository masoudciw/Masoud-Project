import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { UPDATE_PASSWORD } from '../../utils/mutations';
import { useNavigate } from "react-router-dom";
import useTitle from '../../hooks/useTitle';
import './changePassword.css';

const ChangePassword = () => {

    useTitle("Masoud | Change Password");

    const { userId } = useParams();

    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [reapeatPassword, setRepeatPassword] = useState('');
    const [changeEmailAddress, { error }] = useMutation(UPDATE_PASSWORD, { variables: { userId: userId, password: password } });

    const handleUpdateEmail = async (userId) => {
        if (password === reapeatPassword) {
            try {
                const { data } = await changeEmailAddress({
                    variables: { userId, password },
                });
            } catch (err) {
                console.error(err);
            }
            alert('Password Updated Successfully!');
            navigate("/account");
        } else {
            alert('Passwords Are Not Match!')
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
            <div className='changePassword'>
                <form className='changePasswordBox'>
                    <div class="form-group row">
                        <label for="inputPassword3">New Password *</label>
                        <div class="col-sm-10">
                            <input type="password" name='newPassword' value={password} onChange={(e) => { setPassword(e.target.value) }} class="form-control" id="inputPassword3" placeholder="******" />
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3">Reapet The New Password *</label>
                            <div class="col-sm-10">
                                <input type="password" name='reapetNewPassword' value={reapeatPassword} onChange={(e) => { setRepeatPassword(e.target.value) }} class="form-control" id="inputPassword3" placeholder="******" />
                            </div>
                            <div class="col-sm-10">
                                <button type="submit" onClick={() => handleUpdateEmail(userId)} class="btn btn-primary">Change Password</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ChangePassword;