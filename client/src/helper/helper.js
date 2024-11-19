const productQuantity = (state, _id) => {
    const index = state.selectedItems.findIndex((item) => item._id === _id);
    if (index === -1) {
        return 0;
    } else {
        return state.selectedItems[index].quantity;
    }
};

export { productQuantity };