import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { TbShoppingBagPlus } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { productQuantity } from '../../helper/helper';


const Cart = ({ datas }) => {
    const { _id, image, title, price } = datas;

    const [state, dispatch] = useCart();

    const quantity = productQuantity(state, _id);

    const clickHandler = (type) => {
        dispatch({ type, payload: datas })
    }

    return (
        <>
            <Link className='productLink' to={_id}><div className='productsImageBox'>{image}</div></Link>
            <div className='productsInformations'>
                <p>Title : <span>{title}</span></p>
                <p>Price : <span>${price}</span></p>
                <Link className='productLink' to={_id}>Read More ..</Link>
                <div className='quantity'>
                    {
                        quantity === 1 && (
                            <button onClick={() => clickHandler('REMOVE_ITEM')}><MdDeleteOutline /></button>
                        )
                    }
                    {
                        quantity > 1 && (
                            <button onClick={() => clickHandler('DECREASE')}>-</button>
                        )
                    }
                    {!!quantity && <span>{quantity}</span>}
                    {
                        quantity === 0 ? (
                            <button onClick={() => clickHandler('ADD_ITEM')}><TbShoppingBagPlus /></button>
                        ) : (
                            <button onClick={() => clickHandler('INCREASE')}>+</button>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Cart;