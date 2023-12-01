import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
 const [item, setItem] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    const fetchItem = async () => {
      try {
        // Simulamos una llamada asíncrona con un tiempo de espera de 2 segundos
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock de datos de un solo producto
        const mockItem = {
          id: 1,
          title: 'Producto Detalle',
          description: 'Descripción detallada del producto',
          price: 50,
          pictureUrl: 'imagen-detalle.jpg',
          // Agrega más detalles según sea necesario
        };

        setItem(mockItem);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching item details:', error);
        setLoading(false);
      }
    };

    fetchItem();
 }, []);

 return (
    <div className="item-detail-container">
      <h2>Detalles del producto</h2>
      {loading ? (
        <p>Cargando detalles del producto...</p>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
 );
}

export default ItemDetailContainer;