import React from 'react';
import { useCart } from '../../context/CartContext';
import BasketCart from './BasketCart.jsx';
import BasketSideBar from './BasketSideBar.jsx';
import emptyCart from '../../assets/empty-cart.jpg';
import './checkoutPage.css';


const CheckoutPage = () => {

    const [state, dispatch] = useCart();

    const clickHandler = (type, payload) => dispatch({ type, payload });

    if (!state.itemsCounter) {

        return <>
            <div className='emptyCartBox'>
                <img src={emptyCart} alt="Empty Cart Image" />
                <h3>Your Cart Is Empty!</h3>
            </div>
        </>
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