import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import './posts.css';


const Posts = () => {

    useTitle("Masoud | Posts");

    const { loading, data } = useQuery(QUERY_POSTS);
    if (loading) {
        return <h3>Posts Are Loading...</h3>;
    }

    return (
        <>
            <div className='posts'>
                {data.posts.map((post) => (
                    <div className='postInformationBox'>
                        <div key={post._id}>
                            <ul className='postLists'>
                                <li><span>Post Id: </span><p>{post._id}</p></li>
                                <li><span>Brand: </span><p>{post.title}</p></li>
                                <li><span>Price: </span><p>${post.price}</p></li>
                                <li><span>Model: </span><p>{post.description}</p></li>
                                <li><span>Category: </span><p>{post.category}</p></li>
                                <li><span>Post Author: </span><p>{post.postAuthor}</p></li>
                                <li><span>Created At: </span><p>{post.createdAt}</p></li>
                                <li><img src={post.image} alt="Picture Of Post" /></li>
                                <li><Link to={post._id} className='viewButton'>Delete / Edit</Link></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Posts;

// {data.posts.map((post) => (
//     <div className='posts'>
//         <div key={post._id}>
//             <table>
//                 <thead>
//                     <tr>
//                         <td><span>Title:</span></td>
//                         <td><span>Price:</span></td>
//                         <td><span className='descriptionBox'>Description:</span></td>
//                         <td><span>Category:</span></td>
//                         <td><span className='postAuthorBox'>Post Author:</span></td>
//                         <td><span>Created At:</span></td>
//                         {/* <td><span>Image:</span></td> */}
//                         <td><Link to={post._id} className='viewButton'>Delete / Edit</Link></td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td><p>{post.title}</p></td>
//                         <td><p>${post.price}</p></td>
//                         <td><p className='descriptionBox'>{post.description}</p></td>
//                         <td><p>{post.category}</p></td>
//                         <td><p className='postAuthorBox'>{post.postAuthor}</p></td>
//                         <td><p>{post.createdAt}</p></td>
//                         {/* <td><p>{post.image}</p></td> */}
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </div>
// ))}