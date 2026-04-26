import React, { useState, useRef, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import data from '../data/answers.json';

export default function Chapter() {
  const { subject, chapter } = useParams();
  const subjectData = data[subject];
  const chapterData = subjectData?.chapters[chapter];

  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomedPages, setZoomedPages] = useState({});

  if (!chapterData) {
    return <Navigate to="/" replace />;
  }

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const newPage = Math.floor((scrollLeft + clientWidth / 2) / clientWidth) + 1;
      if (newPage !== currentPage) {
        setCurrentPage(newPage);
      }
    }
  };

  const handleDoubleTap = (index) => {
    setZoomedPages(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div 
        className="viewer-container" 
        ref={containerRef}
        onScroll={handleScroll}
      >
        {chapterData.pages.map((pageId, index) => {
          // Placeholder URL construction based on requirement:
          // /assets/images/{subject}/{chapter}/page1.webp
          // Since local assets aren't populated, we use a remote placeholder holding the intended structure.
          const isZoomed = zoomedPages[index];
          const mockImageUrl = `https://via.placeholder.com/800x1200/333333/ffffff?text=${subject}+${chapter}+${pageId}`;
          
          return (
            <div key={index} className="image-wrapper">
              <img 
                src={mockImageUrl}
                alt={`Page ${index + 1}`}
                loading="lazy"
                className={`viewer-img ${isZoomed ? 'zoomed' : ''}`}
                onDoubleClick={() => handleDoubleTap(index)}
                /* Add basic touch simulation for double tap on mobile */
                onTouchEnd={(e) => {
                  const now = Date.now();
                  const DOUBLE_PRESS_DELAY = 300;
                  if (e.target.lastTouch && (now - e.target.lastTouch) < DOUBLE_PRESS_DELAY) {
                    handleDoubleTap(index);
                  }
                  e.target.lastTouch = now;
                }}
              />
            </div>
          );
        })}
      </div>
      
      <div className="page-indicator">
        {currentPage} / {chapterData.pages.length}
      </div>
    </div>
  );
}
