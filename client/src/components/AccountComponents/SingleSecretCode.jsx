import React from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_SECRET_CODE } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { DELETE_SECRET_CODE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import useTitle from '../../hooks/useTitle';
import './SingleSecretCode.css';

const SingleSecretCode = () => {


    const { secretCodeId } = useParams();
    useTitle(`Masoud | SecretCode: ${secretCodeId} `);
    const navigate = useNavigate();
    const [deleteSecretCode, { error }] = useMutation(DELETE_SECRET_CODE, { variables: { secretCodeId: secretCodeId } });

    const handleDeleteSecretCode = async (secretCodeId) => {
        navigate("/account");
        alert('User Deleted Successfully');
        try {
            const { data } = await deleteSecretCode({
                variables: { secretCodeId },
            });
        } catch (err) {
            console.error(err);
        }
    };


    const { loading, data } = useQuery(QUERY_SINGLE_SECRET_CODE, {
        variables: { secretCodeId: secretCodeId },
    });
    console.log(data)
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className='secretCodeBox1'>
                <form className='secretCodeContainer'>
                    <div class="form-group row">
                        <label for="inputSecretCode">Secret Code:</label>
                        <div class="col-sm-10">
                            <input type="text" name='secretCode' disabled class="form-control" id="inputSecretCode" placeholder={data.secretCode.secretCodeText} />
                        </div>
                        <label for="inputCreatedAt">Created At:</label>
                        <div class="col-sm-10">
                            <input type="text" name='createdAt' disabled class="form-control" id="inputCreatedAt" placeholder={data.secretCode.createdAt} />
                        </div>
                        <div class="col-sm-10">
                            <button type='submit' onClick={() => handleDeleteSecretCode(secretCodeId)} class="btn btn-danger">Delete Secret Code</button>
                        </div>
                    </div>
                </form >
            </div >
        </>
    );
};

export default SingleSecretCode;