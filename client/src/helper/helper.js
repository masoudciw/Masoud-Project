const productQuantity = (state, _id) => {
    const index = state.selectedItems.findIndex((item) => item._id === _id);
    if (index === -1) {
        return 0;
    } else {
        return state.selectedItems[index].quantity;
    }
};

const searchProducts = (products, search) => {
    if (!search) return products;
    const searchedProducts = products.filter((p) => p.title.toLowerCase().includes(search));
    return searchedProducts;
};

const filterProducts = (products, category) => {
    if (!category) return products;
    const filteredProducts = products.filter((p) => p.category === category);
    return filteredProducts;
};

export { productQuantity, searchProducts, filterProducts };