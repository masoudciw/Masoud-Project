import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTitle from "../hooks/useTitle";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { QUERY_SECRET_CODES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Loader from '../../src/assets/loader.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';


const Login = () => {

    // const { secretCodeId } = useParams();
    useTitle("Masoud | Sign In");
    const [login, { error, data }] = useMutation(LOGIN_USER);
    // const [secretKey, setsecretKey] = useState('');
    // let [secretKeyss] = useState({});
    const [formState, setFormState] = useState({ email: '', password: '' });
    // const [formState, setFormState] = useState({ email: '', password: '', userType: '' });



    // const { loading, data: data2 } = useQuery(QUERY_SECRET_CODES, { variables: { secretCodeId: secretCodeId } });
    // if (loading) {
    //     return <h3>Loading...</h3>;
    // }

    // const secretKeys = data2.secretCodes.map((secretCode) => {
    //     const secretCodeValue = secretCode.secretCodeText;
    //     return secretCodeValue;
    // });

    // for (let i = 0; i < secretKeys.length; i++) {
    //     secretKeyss = secretKeys[i];
    // }
    // console.log(secretKeyss)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,

        });

    };


    const handleFormSubmit = async (event) => {
        // for (let i = 0; i < secretKeys.length; i++) {
        // let secretKeyss = secretKeys[i];
        // console.log(secretKeyss)
        // if (formState.userType === 'ADMIN' && secretKey != secretKeyss) {
        // event.preventDefault();
        // alert('Invalid Secret Key! Please Try Again.')

        // } else if (formState.userType === 'ADMIN' && secretKey === secretKeyss) {
        //     event.preventDefault();
        //     try {
        //         const { data } = await login({
        //             variables: { ...formState },
        //         });

        //         Auth.login(data.login.token);
        //     } catch (e) {
        //         console.error(e);
        //     }

        //     setFormState({
        //         email: '',
        //         password: '',
        //         userType: ''
        //     });


        // } else if (formState.userType === 'USER') {
        if (formState.username === 'masoud') {
            event.preventDefault();
            formState.userType = 'ADMIN';
            try {
                const { data } = await login({
                    variables: { ...formState },
                });

                Auth.login(data.login.token);
            } catch (e) {
                console.error(e);
            }

            setFormState({
                email: '',
                password: '',
                // userType: ''
            });

        } else {
            event.preventDefault();
            formState.userType = 'USER';
            try {
                const { data } = await login({
                    variables: { ...formState },
                });

                Auth.login(data.login.token);
            } catch (e) {
                console.error(e);
            }

            setFormState({
                email: '',
                password: '',
                // userType: ''
            });
        }
        // } else {
        //     event.preventDefault();
        //     alert('Please Select The User Type.')
        // }
        // }
    };


    return (
        <>
            <div className='loginBox'>
                {data ? (
                    <>
                        <div className='loginSuccessMessage'>
                            <img src={Loader} alt="Loader Image" />
                            <p>
                                Login To Your Account!
                            </p>
                        </div>
                    </>
                ) : (
                    <form className='formLoginBox' onSubmit={handleFormSubmit}>
                        <h6>Sign in or create a new account in order to save items or add to your wish list.</h6>
                        {/* <div className='userType'>
                            <span>Login As:</span>
                            <input type="radio" name='userType' value='USER' onChange={(e) => setFormState({ ...formState, userType: e.target.value })} /> User
                            <input type="radio" name='userType' value='ADMIN' onChange={(e) => setFormState({ ...formState, userType: e.target.value })} /> Admin
                        </div> */}
                        {/* {formState.userType === 'ADMIN' ? ( */}
                        {/* <div class="form-group row">
                                <label for="secretKey">Secret Key</label>
                                <div class="col-sm-10">
                                    <input type="password" name='secretKey' class="form-control" id="secretKey" placeholder="Type The Secret Key"
                                        onChange={(e) => setsecretKey(e.target.value)} />
                                </div>
                            </div>
                        ) : null} */}
                        <div class="form-group row">
                            <label for="email">Your Email</label>
                            <div class="col-sm-10">
                                <input type="email" name='email' class="form-control" id="email" placeholder="Your Email" value={formState.email}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3">Password</label>
                            <div class="col-sm-10">
                                <input type="password" name='password' class="form-control" id="inputPassword3" placeholder="******" value={formState.password}
                                    onChange={handleChange} />
                            </div>
                            <div className='checkBox'>
                                <input className='checkBoxMarker' type="checkbox" id="gridCheck1" />
                                <label for="gridCheck1">
                                    Remember Me!
                                </label>
                            </div>
                        </div>
                        <Link className='forgotPassword' to='/ForgotPassword'>Forgot Password?</Link>
                        <span>Don't have an account?</span>
                        <Link className='createAccountPage' to='/signup'>Create New Account</Link>
                        <div class="form-group row">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                )}
                {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                    </div>
                )}
                <p className='adminInfo'>Admin Login Information: <span>[ Email: masoud@gmail.com <i>|</i> Password: 123456 ]</span></p>
            </div>

        </>
    );
};

export default Login;
