import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Simulamos una llamada asíncrona con un tiempo de espera de 2 segundos
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock de datos de productos
        const mockItems = [
          { id: 1, title: 'Producto 1', description: 'Descripción del producto 1', price: 20, pictureUrl: 'imagen1.jpg' },
          { id: 2, title: 'Producto 2', description: 'Descripción del producto 2', price: 30, pictureUrl: 'imagen2.jpg' },
          // Agrega más productos según sea necesario
        ];

        setItems(mockItems);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="item-list-container">
      <h2>Lista de productos</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="row">
          {items.map(item => (
            <div key={item.id} className="col-md-4 mb-4">
              <Item item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemList;
