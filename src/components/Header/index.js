import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          StockWatch
        </Link>
        
        <nav className="nav">
          {isAuthenticated ? (
            <>
              <Link to="/watchlist" className="nav-link">Watchlist</Link>
              <Link to="/alerts" className="nav-link">Alerts</Link>
              <Link to="/profile" className="nav-link">Profile</Link>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;