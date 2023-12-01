import React, { useEffect, useState } from 'react';
import Item from './Item';
import products from '../data/products'; // Importa el array de productos

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una llamada asíncrona con un tiempo de espera de 2 segundos
    const fetchItems = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setItems(products);
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
};

export default ItemList;
