import React, { useEffect, useState } from 'react';
import "./CartList.css";

const CartList = ({ cart, removeFromCart }) => {
    const [CART, setCART] = useState([]);

    useEffect(() => {
        setCART(cart);
    }, [cart]);

    return (
        <div>
            {CART.map((cartItem, cartIndex) => (
                <div className='main' key={cartIndex}>
                    <img src={cartItem.url} className='image' alt={cartItem.name} />
                    <span>{cartItem.name}</span>
                    <button className='btn' onClick={() => {
                        const _CART = CART.map((item, index) => (
                            cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                        ));
                        setCART(_CART);
                    }}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button className='btn' onClick={() => {
                        const _CART = CART.map((item, index) => (
                            cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                        ));
                        setCART(_CART);
                    }}>+</button>
                    <span>{cartItem.price * cartItem.quantity}</span>

                    <button className='btn' onClick={() => {
                        removeFromCart(cartIndex);
                        
                    }}>Remove</button>
                </div>
            ))}
            <p className='total'>Total: <span>
                {CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)}
            </span></p>
        </div>
    );
}

export default CartList;
