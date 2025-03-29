import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <div className="profile-card">
        <h2>Your Profile</h2>
        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">Name:</span>
            <span className="info-value">{user?.name || 'Demo User'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{user?.email || 'user@example.com'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Member Since:</span>
            <span className="info-value">January 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;