import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ isAuthenticated }) => {
  return (
    <div className="dashboard">
      <div className="hero">
        <h1>Stock Market Watchlist & Alert System</h1>
        <p>Track your favorite stocks and get notified when prices hit your targets</p>
        {!isAuthenticated && (
          <div className="auth-actions">
            <Link to="/login" className="btn primary">Login</Link>
            <Link to="/register" className="btn secondary">Register</Link>
          </div>
        )}
      </div>
      
      <div className="features">
        <div className="feature">
          <h3>Real-time Data</h3>
          <p>Get up-to-date stock prices with WebSocket integration</p>
        </div>
        <div className="feature">
          <h3>Custom Watchlists</h3>
          <p>Create and manage your personal stock watchlists</p>
        </div>
        <div className="feature">
          <h3>Price Alerts</h3>
          <p>Set alerts and get notified when stocks hit your target prices</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;