import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulación de una respuesta exitosa
          const mockItem = {
            id: 1,
            title: 'Producto Ejemplo',
            description: 'Descripción del producto',
            price: 29.99,
            pictureUrl: 'URL de la imagen del producto',
          };
          resolve(mockItem);
          // Simulación de un error
          // reject(new Error('No se pudo cargar el producto'));
        }, 2000);
      });
    };

    fetchItem()
      .then((result) => {
        setItem(result);
      })
      .catch((error) => {
        console.error(error.message); // Manejo de errores
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
