import React from 'react';

const products = [
  { id: 1, name: 'Grabado en madera', price: '$15' },
  { id: 2, name: 'Corte en acrílico', price: '$20' },
  { id: 3, name: 'Grabado en vidrio', price: '$25' },
];

const ProductList = () => {
  return (
    <div className="container">
      <h1>Productos</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Precio: {product.price}</p>
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
