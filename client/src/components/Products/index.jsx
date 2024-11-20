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
    const [displayed, setDsiplayed] = useState([]);
    // const [searchedItem, setSearchedItem] = useState('');

    const { loading, data } = useQuery(QUERY_POSTS);

    useEffect(() => {
        const fetchAPI = async () => {
            await setDsiplayed(data.posts);
        }
        fetchAPI()
    }, [data]);

    if (loading && !data) {
        return <h3>Products Are Loading...</h3>;
    }

    const searchHandler = () => {
        const filteredData = data.posts.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
        setDsiplayed(filteredData);
    };

    return (
        <>
            <div className='searchBox'>
                <input type="text" value={search} placeholder='Search Your Product Brand' id='search' onChange={(e) => setSearch(e.target.value)} />
                <button onClick={searchHandler}><FaSearch /></button>
            </div>
            <div className='productSection'>
                <div className='products'>
                    {
                        displayed.map((post) => (
                            <div className="productsBox">
                                <Cart key={post._id} datas={post} />
                            </div>
                        ))
                    }
                    {/* {
                        search ? (
                            displayed.map((post) => (
                                <div className="productsBox">
                                    <Cart key={post._id} datas={post} />
                                </div>
                            ))

                        ) : (

                            data.posts.map((post) => (
                                <div className="productsBox">
                                    <Cart key={post._id} datas={post} />
                                </div>
                            ))
                        )
                    } */}
                    {/* {
                        search ? (
                            searchedItem.map((post) => (
                                <div className="productsBox">
                                    <Cart key={post._id} datas={post} />
                                </div>
                            ))

                        ) : (

                            displayed.map((post) => (
                                <div className="productsBox">
                                    <Cart key={post._id} datas={post} />
                                </div>
                            ))
                        )
                    } */}
                    {/* {
                        displayed.map((post) => (
                            <div className="productsBox">
                                <Cart key={post._id} datas={post} />
                            </div>
                        ))
                    } */}

                </div >
                <div className='categories'>
                    <FaListUl />
                    <p>Categories</p>
                </div>
            </div>
        </>
    );
};

export default Products;
