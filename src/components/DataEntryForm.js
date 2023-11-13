import React, { useState } from 'react';

const DataEntryForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address1: '',
    address2: '',
    postalCode: '',
    province: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Address 1:</label>
      <input
        type="text"
        name="address1"
        value={formData.address1}
        onChange={handleChange}
        required
      />

      <label>Address 2:</label>
      <input
        type="text"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
      />

      <label>Postal Code:</label>
      <input
        type="text"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
      />

      <label>Province:</label>
      <input
        type="text"
        name="province"
        value={formData.province}
        onChange={handleChange}
      />

      <label>City:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default DataEntryForm;
