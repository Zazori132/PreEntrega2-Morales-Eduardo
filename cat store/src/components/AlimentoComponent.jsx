import React from 'react';
import Item from './Item';

const AlimentoComponent = () => {
  // Mock de datos de productos de la categoría Alimento
  const alimentoProducts = [
    { id: 1, title: 'Alimento para gatos 1', description: 'Descripción del alimento 1', price: 15, pictureUrl: 'alimento1.jpg' },
    { id: 2, title: 'Alimento para gatos 2', description: 'Descripción del alimento 2', price: 20, pictureUrl: 'alimento2.jpg' },
    // Agrega más productos según sea necesario
  ];

  return (
    <div>
      <h2>Productos de Alimento</h2>
      <div className="row">
        {alimentoProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <Item item={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlimentoComponent;
