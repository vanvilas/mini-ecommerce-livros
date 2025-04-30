import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Checkout = ({ cart }) => {
    const [success, setSuccess] = useState(false);
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
    };
    
    return (
        <div className='checkout'>
            <h1>🧾 Finalizar Pedido</h1>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.title} — R$ {item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <h2>Total: R$ {total.toFixed(2)}</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome: </label>
                    <input name="name" type="text" required />
                </div>
                <div>
                    <label>Email: </label>
                    <input name="email" type="email" required />
                </div>
                <div>
                    <label>Endereço: </label>
                    <input name="address" type="text" required />
                </div>
                <div>
                    <label>Forma de Pagamento: </label>
                    <label>
                        <input type="radio" name="payment-method" value="credit-card" required />
                        Cartão de Crédito
                    </label>
                    <label>
                        <input type="radio" name="payment-method" value="boleto" />
                        Boleto
                    </label>
                <div>
                    <button type="submit">Confirmar Pedido</button>
                    </div>
                </div>
            </form>

            {success && (
                <p className="success-message">Pedido finalizado com sucesso!</p>
            )}

            <Link to="/">
                <button>Voltar à loja</button>
            </Link>
        </div>
    );
};

export default Checkout;