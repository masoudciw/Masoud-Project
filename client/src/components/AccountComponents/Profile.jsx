import React from 'react';
import Auth from '../../utils/auth';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { UPDATE_EMAIL_ADDRESS } from '../../utils/mutations';
import { useNavigate } from "react-router-dom";
import useTitle from '../../hooks/useTitle';
import './profile.css';

const Profile = () => {

    useTitle("Masoud | Profile");

    const { userId } = useParams();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [reapeatEmail, setRepeatEmail] = useState('');
    const [changeEmailAddress, { error }] = useMutation(UPDATE_EMAIL_ADDRESS, { variables: { userId: userId, email: email } });

    const handleUpdateEmail = async (userId) => {
        if (email === reapeatEmail) {
            try {
                const { data } = await changeEmailAddress({
                    variables: { userId, email },
                });
            } catch (err) {
                console.error(err);
            }
            alert('Email Updated Successfully!');
            navigate("/account");
        } else {
            alert('Emails Are Not Match!')
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
            <div className='profile'>
                <form className='profileBox'>
                    <div class="form-group row">
                        <label for="inputUsername">Your Username</label>
                        <div class="col-sm-10">
                            <input type="text" name='username' disabled class="form-control" id="inputUsername" placeholder={Auth.getProfile().data.username} />
                        </div>
                        <div class="form-group row">
                            <label for="oldEmail">Your Old Email Address *</label>
                            <div class="col-sm-10">
                                <input type="email" name='email' disabled class="form-control" id="oldEmail" placeholder={data.user.email} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail1">New Email Address *</label>
                            <div class="col-sm-10">
                                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' class="form-control" id="inputEmail1" placeholder="Enter Your New Email Address" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail2">Reapet New Email Address *</label>
                            <div class="col-sm-10">
                                <input type="email" value={reapeatEmail} onChange={(e) => { setRepeatEmail(e.target.value) }} name='reapetNewEmail' class="form-control" id="inputEmail2" placeholder="Re Enter Your New Email Address" />
                            </div>
                            <div class="col-sm-10">
                                <button type="submit" onClick={() => handleUpdateEmail(userId)} class="btn btn-primary">Change Email Address</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Profile;