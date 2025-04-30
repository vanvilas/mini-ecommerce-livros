import { addToCart, removeFromCart } from "../utils/cartUtils.js";
import { clearCart } from "../utils/cartUtils.js";

describe('Cart Utilities', () => {

    const initialCart = [
        { id: 1, title: 'Book 1', price: 10.00 },
        { id: 2, title: 'Book 2', price: 20.00 }
    ];

    test('addToCart should add a new book to the cart', () => {
        const newBook = { id:3, title: 'Book 3', price: 30.00};
        const updatedCart = addToCart(initialCart, newBook);
        expect(updatedCart).toHaveLength(3);
        expect(updatedCart).toContainEqual(newBook);
    });

    test('removeFromCart should remove the book with the given id', () => {
        const updatedCart = removeFromCart(initialCart, 1);
        expect(updatedCart).toHaveLength(1);
        expect(updatedCart).not.toContainEqual(initialCart[0]);
    });

    beforeAll(() => {
        const localStorageMock = (function () {
            let store = {};
            return {
                getItem(key) {
                    return store[key] || null;
                },
                setItem(key, value) {
                    store[key] = String(value);
                },
                removeItem(key) {
                    delete store[key];
                },
                clear() {
                    store = {};
                },
            };
        })();

        if (!global.localStorage) {
            global.localStorage = localStorageMock;
        }
    });

    test('clearCart should remove the cart from localStorage', () => {
        localStorage.setItem('cart', JSON.stringify([{ id: 1, title: 'Livro Exemplo' }]));
        clearCart();
        const result = localStorage.getItem('cart');
        expect(result).toBeNull();
    });
});