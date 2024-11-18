import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import useTitle from '../../hooks/useTitle';
import Card from '../Card/Card';
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
                        <Card key={post._id} datas={post} />
                    </div>
                ))}
            </div >
        </>
    );
};

export default Products;
