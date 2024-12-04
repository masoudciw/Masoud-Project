import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
// import { searchProducts } from '../../helper/helper';
import useTitle from '../../hooks/useTitle';
import Cart from '../Cart/Cart';
import NoProduct from '../../assets/noPosts.jpg';
import './index.css';


const Products = () => {

    useTitle("Masoud | Products");

    const [search, setSearch] = useState('');
    const [displayed, setDisplayed] = useState([]);

    // const [searchedItem, setSearchedItem] = useState('');
    const { loading, data } = useQuery(QUERY_POSTS);


    useEffect(() => {
        const fetchAPI = async () => {
            await setDisplayed(data.posts);
        }
        fetchAPI()
    }, [data]);


    if (loading) {
        return <h3>Products Are Loading...</h3>;
    }

    const searchHandler = () => {
        const searchedData = data.posts.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
        setDisplayed(searchedData);
    };

    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText;
        if (category === 'ALL') return searchHandler();
        if (tagName !== 'LI') return;
        const filteredData = data.posts.filter((item) => item.category === category);
        setDisplayed(filteredData);
    };

    return (
        <>
            <div className='filterBox'>
                <div className='searchBox'>
                    <input type="text" value={search} placeholder='Search Your Product Brand' id='search' onChange={(e) => setSearch(e.target.value)} />
                    <button type='submit' onClick={searchHandler}><FaSearch /></button>
                </div>
                <div className='categoryBox'>
                    <div className='categories'>
                        <FaListUl />
                        <p>Categories</p>
                    </div>
                    <ul onClick={categoryHandler}>
                        <li>ALL</li>
                        <li>Piano</li>
                        <li>Guitar</li>
                    </ul>
                </div>
            </div>
            <div className='productSection'>
                {!data ? (
                    <div className='noProductSection'>
                        <img src={NoProduct} alt="No Product Image" />
                        <p>
                            No Products. Please Come Back Later!
                        </p>
                    </div>
                ) : (
                    <div className='products'>
                        {
                            displayed.map((post) => (
                                <div className="productsBox">
                                    <Cart key={post._id} datas={post} />
                                </div>
                            ))
                        }
                    </div >)}
            </div >
        </>
    );
};

export default Products;



// {/* {
//                         search ? (
//                             displayed.map((post) => (
//                                 <div className="productsBox">
//                                     <Cart key={post._id} datas={post} />
//                                 </div>
//                             ))

//                         ) : (

//                             data.posts.map((post) => (
//                                 <div className="productsBox">
//                                     <Cart key={post._id} datas={post} />
//                                 </div>
//                             ))
//                         )
//                     } */}
// {/* {
//                         search ? (
//                             searchedItem.map((post) => (
//                                 <div className="productsBox">
//                                     <Cart key={post._id} datas={post} />
//                                 </div>
//                             ))

//                         ) : (

//                             displayed.map((post) => (
//                                 <div className="productsBox">
//                                     <Cart key={post._id} datas={post} />
//                                 </div>
//                             ))
//                         )
//                     } */}
// {/* {
//                         displayed.map((post) => (
//                             <div className="productsBox">
//                                 <Cart key={post._id} datas={post} />
//                             </div>
//                         ))
//                     } */}