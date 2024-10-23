import React from 'react';
import logo from "../../assets/carrito.png"

const ProductCard = ({ name, description, image }) => {
  return (
    <div className="card" style={{ width: '300px' }}>
      <img src={image} className="card-img-top" alt="Imagen del producto" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <button type="button" className="btn   
 btn-success">Agregar al carrito</button>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className="container">
      <div className="row">
        <ProductCard
          name="Producto 1"
          description="Descripción"
          image={logo}
        />
        <ProductCard
          name="Producto 2"
          description="Descripción"
          image={logo}
        />

        <ProductCard
          name="Producto 3"
          description="Descripción"
          image={logo}
        />

<div className="row">
        <ProductCard
          name="Producto 4"
          description="Descripción"
          image={logo}
        />

        <ProductCard
          name="Producto 5"
          description="Descripción"
          image={logo}
        />

        <ProductCard
          name="Producto 6"
          description="Descripción"
          image={logo}
        />

      </div>
      </div>
    </div>
  );
};

export default Product;