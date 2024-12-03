import React from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';
import CommentList from '../CommentComponents/CommentList';
import CommentForm from '../CommentComponents/CommentForm';
import Auth from '../../utils/auth';
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
                <div className='productImage'><img src={data.post.image} /></div>
                <div className='productInfo'>
                    {Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <p>Post ID: <span>{data.post._id}</span></p> : null}
                    <p>Brand: <span>{data.post.title}</span></p>
                    <p>Price: <span>${data.post.price}</span></p>
                    <p>Model: <span>{data.post.description}</span></p>
                    <p>Category: <span>{data.post.category}</span></p>
                    <p>Posted At: <span>{data.post.createdAt}</span></p>
                    <div class="col-sm-10">
                    {Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? null : <Link to='/products' class="btn btn-danger">Back To Shop</Link>}
                    </div>
                </div>
            </div>
            <div className="commentProductBox" >
                <CommentForm postId={data.post._id} />
            </div>
            <div className="my-5">
                <CommentList comments={data.post.comments} />
            </div>
        </>
    );
};

export default SingleProduct;