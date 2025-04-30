export const addToCart = (cart, book) => {
    return [...cart, book];
};

export const removeFromCart = (cart, id) => {
    return cart.filter(item => item.id !== id);
};

export const clearCart = () => {
    localStorage.removeItem('cart');
    return [];
};