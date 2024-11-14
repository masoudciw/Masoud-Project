import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import './index.css';


const Products = () => {

    useTitle("Masoud | Products");

    const { loading, data } = useQuery(QUERY_POSTS);
    if (loading && !data) {
        return <h3>Products Are Loading...</h3>;
    }

    return (
        <>
            <div className='products'>
                {data.posts.map((post) => (
                    <div className="productsBox">
                        <div key={post._id}>
                        <Link className='productLink' to={post._id}><div className='productsImageBox'>{post.image}</div></Link>
                            <div className='productsInformations'>
                                <p>Title : <span>{post.title}</span></p>
                                <p>Price : <span>${post.price}</span></p>
                                <Link className='productLink' to={post._id}>Read More ..</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;