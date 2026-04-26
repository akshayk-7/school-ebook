import React from 'react';

export default function NavigationControls({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <div className="navigation-controls">
      <button 
        className="nav-btn" 
        onClick={onPrev} 
        disabled={currentPage <= 1}
        aria-label="Previous image"
      >
        ← Prev
      </button>
      
      <span className="nav-indicator">
        {currentPage} / {totalPages}
      </span>
      
      <button 
        className="nav-btn" 
        onClick={onNext} 
        disabled={currentPage >= totalPages}
        aria-label="Next image"
      >
        Next →
      </button>
    </div>
  );
}
