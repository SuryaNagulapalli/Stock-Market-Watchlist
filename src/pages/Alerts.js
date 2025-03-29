import React, { useState, useEffect } from 'react';
import AlertsList from '../components/Alert/AlertsList';
import AlertForm from '../components/Alert/AlertForm';
// import './Alerts.css';

const Alerts = ({ user }) => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setAlerts([
            { id: 1, symbol: 'AAPL', condition: 'above', price: 180, triggered: false },
            { id: 2, symbol: 'MSFT', condition: 'below', price: 320, triggered: true },
          ]);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching alerts:', error);
        setLoading(false);
      }
    };

    fetchAlerts();
  }, [user]);

  const handleAddAlert = (alert) => {
    setAlerts([...alerts, { ...alert, id: Date.now() }]);
  };

  const handleRemoveAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="alerts-page">
      <div className="alerts-container">
        <h2>Your Price Alerts</h2>
        {loading ? (
          <div className="loading">Loading alerts...</div>
        ) : (
          <AlertsList alerts={alerts} onRemove={handleRemoveAlert} />
        )}
      </div>
      <div className="alert-form-container">
        <h3>Create New Alert</h3>
        <AlertForm onAddAlert={handleAddAlert} />
      </div>
    </div>
  );
};

export default Alerts;