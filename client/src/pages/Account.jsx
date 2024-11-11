import React from 'react';
import './account.css';
import { Outlet } from 'react-router-dom';
import Slider from '../components/Slider/Slider';
import useTitle from '../hooks/useTitle';

const Account = () => {

    useTitle("Masoud | Account");

    return (
        <>
            {/* {Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? 'salam admin' : 'salam user'} */}
            <div className='accountContainer'>
                <div className='accountSlider'>
                    <Slider />
                </div>
                <div className='accountContent'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Account;