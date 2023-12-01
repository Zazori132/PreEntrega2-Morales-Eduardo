import React from 'react';
import Item from './Item';

const JuguetesComponent = () => {
  // Mock de datos de productos de la categoría Juguetes
  const juguetesProducts = [
    { id: 1, title: 'Juguete para gatos 1', description: 'Descripción del juguete 1', price: 8, pictureUrl: 'juguete1.jpg' },
    { id: 2, title: 'Juguete para gatos 2', description: 'Descripción del juguete 2', price: 12, pictureUrl: 'juguete2.jpg' },
    // Agrega más productos según sea necesario
  ];

  return (
    <div>
      <h2>Productos de Juguetes</h2>
      <div className="row">
        {juguetesProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <Item item={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JuguetesComponent;
