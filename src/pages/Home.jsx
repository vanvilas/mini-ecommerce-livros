import React from 'react';
import books from '../data/books';

const Home = ({ addToCart }) => {
    return (
        <div className='home'>
            <h1>📚 Mini E-Commerce de Livros</h1>
            <div className='book-list'>
                {books.map((book) => (
                    <div key={book.id} className='book-card'>
                        <img src={book.image} alt={book.title} width={120} />
                        <h2>{book.title}</h2>
                        <p><strong>Autor:</strong> {book.author}</p>
                        <p><strong>Preço:</strong> R$ {book.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(book)}>Adicionar ao Carrinho</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;