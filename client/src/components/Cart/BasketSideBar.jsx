import React from 'react';
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";


const BasketSideBar = ({ state, clickHandler }) => {

    const { total, itemsCounter, checkout } = state;

    return (
        <>
            <div>
                <TbChecklist />
                <p>Total:</p>
                <span>${total}</span>
            </div>
            <div>
                <FaHashtag />
                <p>Quantity:</p>
                <span>{itemsCounter}</span>
            </div>
            <div>
                <BsPatchCheckFill />
                <p>Status:</p>
                <span>{!checkout && 'Pending ...'}</span>
            </div>
            <button onClick={() => clickHandler('CHECKOUT')}>Checkout</button>
        </>
    );
};

export default BasketSideBar;