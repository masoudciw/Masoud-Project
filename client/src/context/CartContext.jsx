import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
};

const sumProducts = (products) => {
    const itemsCounter = products.reduce((counter, product) => counter + product.quantity, 0);
    const total = products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

    return { itemsCounter, total }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            if (!state.selectedItems.find((item) => item._id === action.payload._id)) {
                state.selectedItems.push({ ...action.payload, quantity: 1 });
            }
            return {
                ...state,
                ...sumProducts(state.selectedItems),
                checkout: false
            }
        case 'REMOVE_ITEM':
            const newSelectedItems = state.selectedItems.filter((item) => item._id !== action.payload._id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumProducts(newSelectedItems),
            }
        case 'INCREASE':
            const increaseIndex = state.selectedItems.findIndex((item) => item._id === action.payload._id);
            state.selectedItems[increaseIndex].quantity++;
            return {
                ...state,
                ...sumProducts(state.selectedItems),
            }
        case 'DECREASE':
            const decreaseIndex = state.selectedItems.findIndex((item) => item._id === action.payload._id);
            state.selectedItems[decreaseIndex].quantity--;
            return {
                ...state,
                ...sumProducts(state.selectedItems),
            }
        case 'CHECKOUT':
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
        default:
            throw new Error('Invalid Action');
    }
};

const CartContext = createContext()

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const { state, dispatch } = useContext(CartContext);
    return [state, dispatch];
}

export default CartProvider;
export { useCart };