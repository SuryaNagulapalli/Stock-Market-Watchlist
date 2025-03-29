import React, { useState, useEffect } from 'react';
import StockCard from './StockCard';
import SearchBar from '../Search/SearchBar';
import './StockList.css';

const StockList = ({ watchlist, onAddStock, onRemoveStock }) => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        // Simulate fetching stocks
        const dummyStocks = [
          { symbol: 'AAPL', name: 'Apple Inc.', price: 175.34, change: 1.23, changePercent: 0.71 },
          { symbol: 'MSFT', name: 'Microsoft Corporation', price: 328.39, change: -2.15, changePercent: -0.65 },
          { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: 3.42, changePercent: 2.46 },
          { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.75, change: -1.25, changePercent: -0.69 },
          { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.98, change: 12.34, changePercent: 5.28 },
        ];
        
        setStocks(dummyStocks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stocks:', error);
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  return (
    <div className="stock-list-container">
      <div className="stock-list-header">
        <h2>Your Watchlist</h2>
        <SearchBar onSearch={handleSearch} />
      </div>
      
      {loading ? (
        <div className="loading">Loading stocks...</div>
      ) : (
        <div className="stock-grid">
          {watchlist.map((stock) => (
            <StockCard 
              key={stock.symbol} 
              stock={stock} 
              onRemove={onRemoveStock}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StockList;