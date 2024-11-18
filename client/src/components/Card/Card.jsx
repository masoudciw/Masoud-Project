import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { TbShoppingBagPlus } from "react-icons/tb";

const Card = ({ datas }) => {
    const { _id, image, title, price } = datas;

    const [state, dispatch] = useCart();
    console.log(state)

    const clickHandler = () => {
        dispatch({ type: 'ADD_ITEM', payload: datas })
    }

    return (
        <>
            <Link className='productLink' to={_id}><div className='productsImageBox'>{image}</div></Link>
            <div className='productsInformations'>
                <p>Title : <span>{title}</span></p>
                <p>Price : <span>${price}</span></p>
                <Link className='productLink' to={_id}>Read More ..</Link>
                <button onClick={clickHandler} className='cardButton'><TbShoppingBagPlus /></button>
            </div>
        </>
    );
};

export default Card;