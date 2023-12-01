import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
 const [itemsInCart, setItemsInCart] = useState(3);

 const handleAddItem = () => {
    setItemsInCart(itemsInCart + 1);
 };

 const handleRemoveItem = () => {
    if (itemsInCart > 0) {
      setItemsInCart(itemsInCart - 1);
    }
 };

 return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" style={{ fontSize: '28px' }} />
      <span className="badge badge-pill badge-danger">{itemsInCart}</span>
      <div>
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={handleRemoveItem}>Remove Item</button>
      </div>
    </div>
 );
}

export default CartWidget;
