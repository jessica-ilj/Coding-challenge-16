import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} /> //map function to render a ProductItem component for each product.
      ))}
    </div>
  );
}

export default ProductList;

