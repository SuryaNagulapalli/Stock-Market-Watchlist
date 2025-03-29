import React from 'react';
import './Alert.css';

const AlertsList = ({ alerts, onRemove }) => {
  return (
    <div className="alerts-list">
      {alerts.length === 0 ? (
        <p className="no-alerts">You don't have any alerts yet.</p>
      ) : (
        <ul>
          {alerts.map(alert => (
            <li key={alert.id} className={`alert-item ${alert.triggered ? 'triggered' : ''}`}>
              <div className="alert-info">
                <span className="alert-symbol">{alert.symbol}</span>
                <span className="alert-condition">
                  {alert.condition === 'above' ? '>' : '<'} ${alert.price}
                </span>
                {alert.triggered && <span className="alert-status">Triggered</span>}
              </div>
              <button 
                onClick={() => onRemove(alert.id)} 
                className="remove-alert-btn"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlertsList;