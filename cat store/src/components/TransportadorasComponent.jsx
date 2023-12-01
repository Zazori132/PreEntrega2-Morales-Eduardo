import React from 'react';
import Item from './Item';

const TransportadorasComponent = () => {
  // Mock de datos de productos de la categoría Transportadoras
  const transportadorasProducts = [
    { id: 1, title: 'Transportadora 1', description: 'Descripción de la transportadora 1', price: 25, pictureUrl: 'transportadora1.jpg' },
    { id: 2, title: 'Transportadora 2', description: 'Descripción de la transportadora 2', price: 30, pictureUrl: 'transportadora2.jpg' },
    // Agrega más productos según sea necesario
  ];

  return (
    <div>
      <h2>Productos de Transportadoras</h2>
      <div className="row">
        {transportadorasProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <Item item={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransportadorasComponent;
