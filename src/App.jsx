import React, { useState, useEffect } from 'react';
import { addToCart, removeFromCart, clearCart } from './utils/cartUtils';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import './App.css'; 

function App() {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]); 

    const removeFromCartHandler = (id) => {
        setCart(removeFromCart(cart, id));
    };

    const addToCartHandler = (book) => {
        setCart(addToCart(cart, book));
    };

    const clearCartHandler = () => {
        setCart(clearCart());
    };

return (
    <div className='App'>
            <Routes>
                <Route path='/' element={
                    <>
                        <Home addToCart={addToCartHandler} />
                        <Cart 
                            cart={cart} 
                            removeFromCart={removeFromCartHandler} 
                            clearCart={clearCartHandler} 
                        />
                    </>
                } />
                <Route path='/checkout' element={<Checkout cart={cart} />} />
            </Routes>
        </div>
    );
}

export default App;