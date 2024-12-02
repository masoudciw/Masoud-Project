import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './slider.css';

const Slider = () => {

    return (
        <>
            <div className='slider'>
                <div className='sliderBox'>
                    <ul>
                        <li><Link className='linkTag' to={`/account/profile/${Auth.getProfile().data._id}`}>Profile</Link></li>
                        <li><Link className='linkTag' to={`/account/changePassword/${Auth.getProfile().data._id}`}>Change Password</Link></li>
                        {Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <li ><Link className='linkTag' to='/account/post'>Make A New Post</Link></li> : null}
                        {Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <li ><Link className='linkTag' to='/account/posts'>Posts</Link></li> : null}
                        {/* {Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <li><Link className='linkTag' to='/account/makeSecretCode'>Make A New Secret Code</Link></li> : null} */}
                        {/* {Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <li><Link className='linkTag' to='/account/secretCodes'>Secret Codes</Link></li> : null} */}
                        {Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <li><Link className='linkTag' to='/account/users'>Users</Link></li> : null}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Slider;