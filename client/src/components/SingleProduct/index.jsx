import React from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import useTitle from '../../hooks/useTitle';
import './index.css';

const SingleProduct = () => {


    const { postId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { postId: postId },
    });

    console.log(data)
    if (loading) {
        return <div>Loading...</div>;
    }
    useTitle(`Masoud | ${data.post.title} `);

    return (
        <>
            <div className='product'>
                <div className='productImage'>{data.post.image}</div>
                <div className='productInfo'>
                    <p>Model: <span>{data.post.title}</span></p>
                    <p>Price: <span>${data.post.price}</span></p>
                    <p>Description: <span>{data.post.description}</span></p>
                    <p>Posted At: <span>{data.post.createdAt}</span></p>
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;