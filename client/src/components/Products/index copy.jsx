import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import { searchProducts } from '../../helper/helper';
import useTitle from '../../hooks/useTitle';
import Cart from '../Cart/Cart';
import './index.css';


const Products = () => {

    useTitle("Masoud | Products");

    const [search, setSearch] = useState('');
    const [displayed, setDisplayed] = useState([]);
    console.log(displayed)
    const [query, setQuery] = useState({});


    const { loading, data } = useQuery(QUERY_POSTS);

    useEffect(() => {
        if (loading && !data) {
            return <h3>Products Are Loading...</h3>;
        }
        setDisplayed(data)
    }, [data]);

    // if (loading && !data) {
    //     return <h3>Products Are Loading...</h3>;
    // }

    // useEffect(() => {
    //     let finalProducts = searchProducts(data.posts, query.search);
    //     console.log(finalProducts)
    // }, [query]);
    // const searchHandler = () => {
    //     setQuery(query => ({ ...query, search: search }));
    // };

    // const categoryHandler = (event) => {
    //     const { tagName } = event.target;
    //     const category = event.target.innerText.toLowerCase();
    //     if (tagName !== 'LI') return;
    //     setQuery(query => ({ ...query, category }));
    // };

    return (
        <>
            <div className='searchBox'>
                {/* <input type="text" value={search} placeholder='Search Your Product' id='search' onChange={(event) => setSearch(event.target.value.toLowerCase())} /> */}
                {/* <button onClick={searchHandler}><FaSearch /></button> */}
            </div>
            <div className='productSection'>
                <div className='products'>
                    {displayed.map((post) => (
                        <div className="productsBox">
                            <Cart key={post._id} datas={post} />
                        </div>
                    ))}
                </div >
                <div className='categories'>
                    <FaListUl />
                    <p>Categories</p>
                </div>
                {/* <ul onClick={categoryHandler}>
                    <li>ALL</li>
                    <li>Pianos</li>
                    <li>Guitars</li>
                </ul> */}
            </div>
        </>
    );
};

export default Products;
