import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header">
      {!isHome ? (
        <button className="icon-btn" onClick={() => navigate(-1)} aria-label="Go back">
          ←
        </button>
      ) : (
        <div className="icon-btn placeholder" />
      )}
      
      <h1>Textbook Answers</h1>
      
      <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
