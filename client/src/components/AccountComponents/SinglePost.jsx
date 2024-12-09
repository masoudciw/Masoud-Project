import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_POSTS } from '../../utils/queries';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { DELETE_POST } from '../../utils/mutations';
import { UPDATE_POST } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import useTitle from '../../hooks/useTitle';
import Auth from '../../utils/auth';
import './singlePost.css';

const SinglePost = () => {


    const { postId } = useParams();
    useTitle(`Masoud | Post: ${postId} `);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [deletePost, { error }] = useMutation(DELETE_POST, {
        refetchQueries: [
            QUERY_POSTS,
            'posts'
        ]
    }, { variables: { postId: postId } });
    const [updatePost, { status }] = useMutation(UPDATE_POST, { variables: { postId: postId, title: title, price: price, description: description, category: category, image: image, postAuthor: Auth.getProfile().data._id } });

    const handleDeletePost = async (postId) => {
        navigate("/account/posts");
        alert('Post Deleted Successfully');
        try {
            const { data } = await deletePost({
                variables: { postId },
            });
        } catch (err) {
            console.error(err);
        }
    };


    const handleUpdatePost = async (postId, postAuthor) => {
        navigate("/account");
        alert('Post Updated Successfully!');
        try {
            const { data } = await updatePost({
                variables: { postId, title, price, description, category, image, postAuthor },
            });
        } catch (err) {
            console.error(err);
        }
    };

    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { postId: postId },
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='singlePost'>
                <form className='singlePostContainer'>
                    <div class="form-group row">
                        <label for="inputPostId">Post ID</label>
                        <div class="col-sm-10">
                            <input type="text" name='postId' disabled class="form-control" id="inputPostId" placeholder={postId} />
                        </div>
                        <label for="inputTitle">Brand</label>
                        <div class="col-sm-10">
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name='title' class="form-control" id="inputTitle" placeholder={data.post.title} />
                        </div>
                        <div class="form-group row">
                            <label for="inputPrice">Price</label>
                            <div class="col-sm-10">
                                <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} name='price' class="form-control" id="inputPrice" placeholder={`$${data.post.price}`} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputDescription">Model</label>
                            <div class="col-sm-10">
                                <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} name='description' class="form-control" id="inputDescription" placeholder={data.post.description} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="category">Category</label>
                            <div class="col-sm-10">
                                <select value={category} onChange={(e) => { setCategory(e.target.value) }} name='category' class="form-control" id="category" placeholder="Category Of Product">
                                    <option name="none" id="none">None</option>
                                    <option name="piano" id="piano">Piano</option>
                                    <option name="guitar" id="guitar">Guitar</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputImage">Image</label>
                            <div class="col-sm-10">
                                <input type="file" value={image} onChange={(e) => { setImage(e.target.value) }} name='image' class="form-control" id="inputImage" />
                            </div>
                            <div class="col-sm-10">
                                <button type="submit" onClick={() => handleUpdatePost(postId, data.post.postAuthor)} class="btn btn-primary">Update Post</button>
                            </div>

                            <div class="col-sm-10">
                                <button type='submit' onClick={() => handleDeletePost(postId)} class="btn btn-danger">Delete Post</button>
                            </div>

                        </div>
                    </div>
                </form >
            </div >
        </>
    );
};

export default SinglePost;