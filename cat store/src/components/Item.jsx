import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  // Manejo de ítem nulo
  if (!item) {
    return <p>Ítem no disponible</p>;
  }

  return (
    <div className="card">
      {/* Enlace al detalle del ítem */}
      <Link to={`/item/${item.id}`}>
        <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">${item.price}</p>
        {/* Agrega más detalles según sea necesario */}
      </div>
    </div>
  );
}

export default Item;

