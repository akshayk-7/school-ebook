import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-item ${path === '/' ? 'active' : ''}`}>
        <span className="nav-icon">🏠</span>
        <span className="nav-label">Home</span>
      </Link>
      <div className="nav-item">
        <span className="nav-icon">🔍</span>
        <span className="nav-label">Search</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">🔖</span>
        <span className="nav-label">Saved</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">👤</span>
        <span className="nav-label">Profile</span>
      </div>
    </nav>
  );
}
