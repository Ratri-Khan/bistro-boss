// import React from 'react';

import useCart from "../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    return (
        <div>
            <p>Total Item : {cart.length}</p>
        </div>
    );
};

export default MyCart;