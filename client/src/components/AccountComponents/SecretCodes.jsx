import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useQuery } from '@apollo/client';
import { QUERY_SECRET_CODES } from '../../utils/queries';
import { Link } from 'react-router-dom';
import './secretCodes.css';


const SecretCodes = () => {

    useTitle("Masoud | Secret Codes");

    const { loading, data } = useQuery(QUERY_SECRET_CODES);
    if (loading) {
        return <h3>Users Are Loading...</h3>;
    }

    return (
        <>
            {data.secretCodes.map((secretCode) => (
                <div className='secretCodes'>
                    <div key={secretCode._id}>
                        <table>
                            <thead>
                                <tr>
                                    <td><span>Number:</span></td>
                                    <td><span>Secret Codes:</span></td>
                                    <td><span>Created At:</span></td>
                                    <td><Link to={secretCode._id} className='viewButton'>Delete / Edit</Link></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>{data.secretCodes.length}</p></td>
                                    <td><p>{secretCode.secretCodeText}</p></td>
                                    <td><p>{secretCode.createdAt}</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </>
    );
};

export default SecretCodes;