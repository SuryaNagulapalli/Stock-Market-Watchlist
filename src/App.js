import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Watchlist from './pages/Watchlist';
import Alerts from './pages/Alerts';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './pages/Profile';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      // In a real app, you would fetch user data here
      setUser({ email: 'user@example.com', name: 'Demo User' });
    }
  }, []);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('token', 'demo-token');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div className="app">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard isAuthenticated={isAuthenticated} />} />
            <Route path="/watchlist" element={
              isAuthenticated ? <Watchlist user={user} /> : <Login onLogin={handleLogin} />
            } />
            <Route path="/alerts" element={
              isAuthenticated ? <Alerts user={user} /> : <Login onLogin={handleLogin} />
            } />
            <Route path="/profile" element={
              isAuthenticated ? <Profile user={user} /> : <Login onLogin={handleLogin} />
            } />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onRegister={handleLogin} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;