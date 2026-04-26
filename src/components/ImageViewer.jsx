import React, { useState } from 'react';
import EmptyState from './EmptyState';

export default function ImageViewer({ src, alt }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState(!src);

  if (hasError) return <EmptyState />;

  return (
    <>
      <div className="image-card">
        <img 
          src={src} 
          alt={alt} 
          loading="lazy" 
          className="viewer-img"
          onError={() => setHasError(true)}
        />
        <button 
          className="zoom-fab" 
          onClick={() => setIsModalOpen(true)}
          aria-label="Zoom image"
        >
          🔍
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <button className="modal-close" onClick={() => setIsModalOpen(false)}>✕</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt} className="full-screen-img" />
          </div>
        </div>
      )}
    </>
  );
}
