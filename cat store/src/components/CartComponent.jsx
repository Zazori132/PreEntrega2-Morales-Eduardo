import React from 'react';

const CartComponent = () => {
  // Ejemplo de productos en el carrito
  const cartItems = [
    { id: 1, name: 'Juguete Interactivo', price: 15.99 },
    { id: 2, name: 'Rascador de Cartón', price: 24.99 },
    // Agrega más productos según sea necesario
  ];

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
}

export default CartComponent;
