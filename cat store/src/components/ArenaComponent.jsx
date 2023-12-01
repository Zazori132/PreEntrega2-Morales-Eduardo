import React from 'react';
import Item from './Item';

const ArenaComponent = () => {
  // Mock de datos de productos de la categoría Arena
  const arenaProducts = [
    { id: 1, title: 'Arena para gatos 1', description: 'Descripción del producto 1', price: 10, pictureUrl: 'arena1.jpg' },
    { id: 2, title: 'Arena para gatos 2', description: 'Descripción del producto 2', price: 15, pictureUrl: 'arena2.jpg' },
    // Agrega más productos según sea necesario
  ];

  return (
    <div>
      <h2>Productos de Arena</h2>
      <div className="row">
        {arenaProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <Item item={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArenaComponent;
