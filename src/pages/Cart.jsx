import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, removeFromCart, clearCart }) => {
    const total = cart.reduce((acc, book) => acc + book.price, 0).toFixed(2);

    return (
        <div className='cart'>
            <h2>🛒 Seu Carrinho</h2>

            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <div>
                    <div className="cart-items">
                        {cart.map((book) => (
                            <div key={book.id}>
                                <img src={book.image} alt={book.title} width={80} />
                                <h3>{book.title}</h3>
                                <p><strong>Autor: </strong> {book.author}</p>
                                <p><strong>Preço: </strong> R$ {book.price.toFixed(2)}</p>
                                <button onClick={() => removeFromCart(book.id)} >Remover</button>                   
                        </div>
                    ))}
                </div>

                <div className='cart-total'>
                    <h3>Total: R$ {total}</h3>
                </div>
        
                <Link to="/checkout">
                    <button style={{ marginTop: '20px'}}>Finalizar Pedido</button>
                </Link>

                <button onClick={clearCart} 
                style={{ 
                    marginTop: '20px', 
                    background: '#e74c3c', 
                    color: 'white',
                    padding: '0.6rem 1.2rem',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer' 
                    }}
                >  
                    Limpar Carrinho          
                </button>
            </div>
        )}
    </div>
    );
};

export default Cart;