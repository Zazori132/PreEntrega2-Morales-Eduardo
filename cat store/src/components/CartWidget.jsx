import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const itemsInCart = 3;

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" style={{ fontSize: '28px' }} />
      <span className="badge badge-pill badge-danger">{itemsInCart}</span>
    </div>
  );
}

export default CartWidget;
