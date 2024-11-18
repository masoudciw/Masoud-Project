import React from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import useTitle from '../../hooks/useTitle';
import CommentList from '../CommentComponents/CommentList';
import CommentForm from '../CommentComponents/CommentForm';
import './index.css';

const SingleProduct = () => {
    const { postId } = useParams();
    useTitle(`Masoud | Product `);


    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { postId: postId },
    });

    if (loading) {
        return <div>Loading...</div>;
    }

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
            <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                <CommentForm postId={data.post._id} />
            </div>
            <div className="my-5">
                <CommentList comments={data.post.comments} />
            </div>
        </>
    );
};

export default SingleProduct;