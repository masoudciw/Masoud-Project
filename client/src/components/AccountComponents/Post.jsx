import React from 'react';
import { ADD_POST } from '../../utils/mutations';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import useTitle from '../../hooks/useTitle';
import Auth from '../../utils/auth';
import './post.css';

const Post = () => {

    useTitle("Masoud | Make A New Post");

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [createPost, { loading, data, error }] = useMutation(ADD_POST);


    const handleCreatePost = async () => {
        if (title, price, description, image) {
            try {
                const { data } = await createPost({
                    variables: { title: title, price: price, description: description, image: image, postAuthor: Auth.getProfile().data._id },
                });
            } catch (err) {
                console.error(err);
            }
            alert('Post Created Successfully!');
            navigate("/account");
        } else {
            alert('Please Try Again!')
        }
    };

    return (
        <>
            <div className='post'>
                <form className='postBox'>
                    <div class="form-group row">
                        <label for="title">Title</label>
                        <div class="col-sm-10">
                            <input type="text" name='title' value={title} onChange={(e) => { setTitle(e.target.value) }} class="form-control" id="title" placeholder='Product Name' />
                        </div>
                        <div class="form-group row">
                            <label for="price">Price</label>
                            <div class="col-sm-10">
                                <input type="text" name='price' value={price} onChange={(e) => { setPrice(e.target.value) }} class="form-control" id="price" placeholder='Price Of Product' />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="description">Description</label>
                            <div class="col-sm-10">
                                <textarea type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} name='description' class="form-control" id="description" placeholder="Description Of Product" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="image">Image</label>
                            <div class="col-sm-10">
                                <input type="file" name='image' value={image} onChange={(e) => { setImage(e.target.value) }} class="form-control" id="image" />
                            </div>
                            <div class="col-sm-10">
                                <button type="submit" onClick={() => handleCreatePost()} class="btn btn-primary">Create Post</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Post;