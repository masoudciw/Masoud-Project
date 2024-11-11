import React from 'react';
import useTitle from "../../hooks/useTitle";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const ForgotPassword = () => {

    useTitle("Masoud | Forgot Password");

    return (
        <>
            <div className='forgotPasswordBox'>
                <form className='formForgotPasswordBox'>
                    <h6>Enter the email associated with your account to receive a link to reset your password.</h6>
                    <div class="form-group row">
                        <label for="inputEmail3">Your Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                       </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-danger">Reset My Password</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ForgotPassword;