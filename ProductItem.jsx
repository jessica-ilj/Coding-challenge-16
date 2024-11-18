import React from 'react';

function ProductItem({ name, price, description }) { //function to display the price.
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p> 
      <p>Description: {description}</p>
    </div>
  );
}

export default ProductItem;
