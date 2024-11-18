import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
  const [formData, setFormData] = useState({ name: '', price: '', description: '' }); //manage the form’s input fields and reset them after submission.

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
    setFormData({ name: '', price: '', description: '' }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      {['name', 'price', 'description'].map((field) => ( 
        <input
          key={field}
          type={field === 'price' ? 'number' : 'text'}
          name={field}
          placeholder={`Enter ${field}`}
          value={formData[field]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
