import React from 'react';
import './makeSecretCode.css';
import { ADD_SECRET_CODE } from '../../utils/mutations';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import useTitle from '../../hooks/useTitle';

const SecretCode = () => {

    useTitle("Masoud | Make A New Secret Code");

    const navigate = useNavigate();
    const [newSecretCode, setnewSecretCode] = useState('');
    const [reapetNewSecretCode, setReapetNewSecretCode] = useState('');
    const [createSecretCode, { data }] = useMutation(ADD_SECRET_CODE);


    const handleCreateSecretCode = async () => {
        if (newSecretCode === reapetNewSecretCode) {
            try {
                const { data } = await createSecretCode({
                    variables: { secretCodeText: newSecretCode },
                });
            } catch (err) {
                console.error(err);
            }
            alert('The Secret Code Created Successfully!');
            navigate("/account");
        } else {
            alert('Secret Codes Are Not Match!')
        }
    };

    return (
        <>
            <div className='secretCode'>
                <form className='secretCodeBox'>
                    <div class="form-group row">
                        <label for="newSecretCode">New Secret Code *</label>
                        <div class="col-sm-10">
                            <input type="password" name='newSecretCode' value={newSecretCode} onChange={(e) => { setnewSecretCode(e.target.value) }} class="form-control" id="newSecretCode" placeholder="******" />
                        </div>
                        <div class="form-group row">
                            <label for="reapetNewSecretCode">Reapet The New Secret Code *</label>
                            <div class="col-sm-10">
                                <input type="password" name='reapetNewSecretCode' value={reapetNewSecretCode} onChange={(e) => { setReapetNewSecretCode(e.target.value) }} class="form-control" id="reapetNewSecretCode" placeholder="******" />
                            </div>
                            <div class="col-sm-10">
                                <button type="submit" onClick={() => handleCreateSecretCode()} class="btn btn-primary">Create a New Secret Code</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SecretCode;