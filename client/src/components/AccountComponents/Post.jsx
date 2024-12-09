import React from 'react';
import { ADD_POST } from '../../utils/mutations';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useTitle from '../../hooks/useTitle';
import Auth from '../../utils/auth';
import './post.css';

const Post = () => {

    useTitle("Masoud | Make A New Post");

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const [createPost, { loading, data, error }] = useMutation(ADD_POST);


    const handleCreatePost = async (e) => {
        if (title, price, description, category, image) {
            try {
                const { data } = await createPost({
                    variables: { title: title, price: price, description: description, category: category, image: image, postAuthor: Auth.getProfile().data._id },
                });
                await axios.post("/api/upload", { image });
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
                <form className='postBox' encType='multipart/form-data'>
                    <div class="form-group row">
                        <label for="title">Brand</label>
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
                            <label for="description">Model</label>
                            <div class="col-sm-10">
                                <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} name='description' class="form-control" id="description" placeholder="Model Of Product" />
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
                            <label for="image">Image <span><i>*</i> The Picture Should Be Under 100kb and JPG Format </span></label>
                            <div class="col-sm-10">
                                <input type="file" name='image' onChange={handleFileChange} class="form-control" id="image" />
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