import React from 'react';
import { useCart } from '../../context/CartContext';
import BasketCart from './BasketCart.jsx';
import BasketSideBar from './BasketSideBar.jsx';
import './checkoutPage.css';


const CheckoutPage = () => {

    const [state, dispatch] = useCart();

    const clickHandler = (type, payload) => dispatch({ type, payload });

    if (!state.itemsCounter) {
        return <p>Your Cart Is Empty</p>
    }
    return (
        <>
            <div className='checkoutPageStyle'>
                <div className='checkoutPage'>
                    <div className='basketSideBar'>
                        <BasketSideBar state={state} clickHandler={clickHandler} />
                    </div>
                    <div className='selectedItems'>
                        {state.selectedItems.map(
                            (product) =>
                                <BasketCart key={product._id} data={product} clickHandler={clickHandler} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;