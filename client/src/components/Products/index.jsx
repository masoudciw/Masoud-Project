import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { TbShoppingBagPlus } from "react-icons/tb";
import './index.css';
import { useCart } from '../../context/CartContext';


const Products = () => {

    useTitle("Masoud | Products");

    const [state, dispatch] = useCart();
    // console.log(state)

    const clickHandler = ( post ) => {
        dispatch({ type: 'ADD_ITEM', payload: post })
    }
    const { loading, data } = useQuery(QUERY_POSTS);
    if (loading && !data) {
        return <h3>Products Are Loading...</h3>;
    }

    return (
        <>
            <div className='products'>
                {data.posts.map((post) => (
                    <div className="productsBox">
                        <div key={post._id} data>
                            <Link className='productLink' to={post._id}><div className='productsImageBox'>{post.image}</div></Link>
                            <div className='productsInformations'>
                                <p>Title : <span>{post.title}</span></p>
                                <p>Price : <span>${post.price}</span></p>
                                <Link className='productLink' to={post._id}>Read More ..</Link>
                                <button onClick={clickHandler(post)} className='cardButton'><TbShoppingBagPlus /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;