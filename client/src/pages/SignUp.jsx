import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from "../hooks/useTitle";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Loader from '../../src/assets/loader.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signUp.css';

const SignUp = () => {

    useTitle("Masoud | Sign Up");

    // const [secretKey, setsecretKey] = useState('');
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        userType: 'USER'
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        // if (formState.userType === 'ADMIN' && secretKey != 'MASOUD') {
        // event.preventDefault();
        // alert('Invalid Secret Key! Please Try Again.')
        // } else if (formState.userType === 'ADMIN' && secretKey === 'MASOUD') {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
            userType: ''
        });


        // } else if (formState.userType === 'USER') {
        //     event.preventDefault();
        //     console.log(formState);
        //     try {
        //         const { data } = await addUser({
        //             variables: { ...formState },
        //         });

        //         Auth.login(data.addUser.token);
        //     } catch (e) {
        //         console.error(e);
        //     }


        // } else {
        //     event.preventDefault();
        //     alert('Please Select The User Type.')
        // }

    };

    return (
        <>
            <div className='signUpBox'>
                {data ? (
                    <div className='signUpSuccessMessage'>
                        <img src={Loader} alt="Loader Image" />
                        <p>
                            SignUp Successfully!
                        </p>
                    </div>
                ) : (
                    <form className='formSignUpBox' onSubmit={handleFormSubmit}>
                        <h6>Create New Account</h6>
                        {/* <div className='userType'>
                            <span>SignUp As:</span>
                            <input type="radio" name='userType' value='USER' onChange={(e) => setFormState({ ...formState, userType: e.target.value })} /> User
                            <input type="radio" name='userType' value='ADMIN' onChange={(e) => setFormState({ ...formState, userType: e.target.value })} /> Admin
                        </div> */}
                        {/* {formState.userType === 'ADMIN' ? (
                            <div class="form-group row">
                                <label for="secretKey">Secret Key</label>
                                <div class="col-sm-10">
                                    <input type="password" name='secretKey' class="form-control" id="secretKey" placeholder="Type The Secret Key"
                                        onChange={(e) => setsecretKey(e.target.value)} />
                                </div>
                            </div>
                        ) : null} */}
                        <div class="form-group row">
                            <label for="inputFirstName">Username *</label>
                            <div class="col-sm-10">
                                <input type="text" name='username' class="form-control" id="inputFirstName" placeholder="Your First Name" value={formState.username}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3">Your Email *</label>
                            <div class="col-sm-10">
                                <input type="email" name='email' class="form-control" id="inputEmail3" placeholder="Email" value={formState.email}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3">Password *</label>
                            <div class="col-sm-10">
                                <input type="password" name='password' class="form-control" id="inputPassword3" placeholder="******" value={formState.password}
                                    onChange={handleChange} />
                                <p className='passwordCondition'>Min. 8 characters, with at least 1 number and 1 letter</p>
                            </div>
                        </div>
                        <span>Already have an account?</span>
                        <Link className='createAccountPage' to='/signin'>Sign In</Link>
                        <div class="form-group row">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </form>
                )}

                {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                    </div>
                )}
            </div>
        </>
    );
};

export default SignUp;