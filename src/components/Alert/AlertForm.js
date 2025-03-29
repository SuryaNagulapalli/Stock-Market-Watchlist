import React, { useState } from 'react';
import './Alert.css';

const AlertForm = ({ onAddAlert }) => {
  const [formData, setFormData] = useState({
    symbol: '',
    condition: 'above',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.symbol && formData.price) {
      onAddAlert({
        ...formData,
        price: parseFloat(formData.price),
      });
      setFormData({
        symbol: '',
        condition: 'above',
        price: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="alert-form">
      <div className="form-group">
        <label htmlFor="symbol">Stock Symbol</label>
        <input
          type="text"
          id="symbol"
          name="symbol"
          value={formData.symbol}
          onChange={handleChange}
          placeholder="e.g. AAPL"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="condition">Condition</label>
        <select
          id="condition"
          name="condition"
          value={formData.condition}
          onChange={handleChange}
        >
          <option value="above">Price above</option>
          <option value="below">Price below</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          step="0.01"
          min="0"
          placeholder="0.00"
          required
        />
      </div>
      <button type="submit" className="add-alert-btn">Add Alert</button>
    </form>
  );
};

export default AlertForm;