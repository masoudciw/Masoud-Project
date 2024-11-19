import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

const BasketCard = ({ data, clickHandler }) => {
    const { title, image, price, quantity } = data;

    return (
        <>
            <div className='basketCartBox'>
                <img src={image} alt='Picture Of Product' />
                <p>{title}</p>
                <p>${price}</p>
                <div className='basketCartButtons'>
                    {data.quantity === 1 && (<button onClick={() => clickHandler('REMOVE_ITEM', data)}>{<MdDeleteOutline />}</button>)}
                    {data.quantity > 1 && (<button onClick={() => clickHandler('DECREASE', data)}>-</button>)}
                    <span>{quantity}</span>
                    <button onClick={() => clickHandler('INCREASE', data)}>+</button>
                </div>
            </div>
        </>
    );
};

export default BasketCard;