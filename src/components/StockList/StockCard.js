import React from 'react';
import './StockList.css';

const StockCard = ({ stock, onRemove }) => {
  const isPositive = stock.change >= 0;

  return (
    <div className="stock-card">
      <div className="stock-info">
        <h3 className="stock-symbol">{stock.symbol}</h3>
        <p className="stock-name">{stock.name}</p>
      </div>
      <div className="stock-price">
        <span className="price">${stock.price.toFixed(2)}</span>
        <span className={`change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)
        </span>
      </div>
      <button onClick={() => onRemove(stock.symbol)} className="remove-btn">
        Remove
      </button>
    </div>
  );
};

export default StockCard;