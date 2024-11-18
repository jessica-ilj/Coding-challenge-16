import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  // Initial list of products, structured as an array of objects
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Space Gray Laptop',
      price: 999.99,
      description: 'A high-performance laptop for professionals.',
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 199.99,
      description: 'Noise-cancelling over-ear headphones.',
    },
    {
      id: 3,
      name: 'Smartwatch',
      price: 299.99,
      description: 'A smartwatch with health tracking and notifications.',
    },
  ]);

  