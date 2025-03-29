import React, { useState, useEffect } from 'react';
import StockList from '../components/StockList/StockList';

const Watchlist = ({ user }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setWatchlist([
            { symbol: 'AAPL', name: 'Apple Inc.', price: 175.34, change: 1.23, changePercent: 0.71 },
            { symbol: 'MSFT', name: 'Microsoft Corporation', price: 328.39, change: -2.15, changePercent: -0.65 },
            { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: 3.42, changePercent: 2.46 },
          ]);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching watchlist:', error);
        setLoading(false);
      }
    };

    fetchWatchlist();
  }, [user]);

  const handleAddStock = (stock) => {
    setWatchlist([...watchlist, stock]);
  };

  const handleRemoveStock = (symbol) => {
    setWatchlist(watchlist.filter(stock => stock.symbol !== symbol));
  };

  return (
    <div className="page-container">
      <StockList 
        watchlist={watchlist} 
        onAddStock={handleAddStock} 
        onRemoveStock={handleRemoveStock} 
      />
    </div>
  );
};

export default Watchlist;