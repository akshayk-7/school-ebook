import React, { useState, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { data } from '../data/data';
import ImageViewer from '../components/ImageViewer';
import NavigationControls from '../components/NavigationControls';

export default function ChapterPage() {
  const { subject, chapter } = useParams();
  const subjectData = data[subject];
  const chapterImages = subjectData ? subjectData[chapter] : null;

  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = chapterImages ? chapterImages.length : 0;

  if (!chapterImages) {
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

  const scrollToPage = (pageIndex) => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      containerRef.current.scrollTo({
        left: (pageIndex - 1) * clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) scrollToPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) scrollToPage(currentPage - 1);
  };

  return (
    <div className="chapter-page-layout">
      <div 
        className="viewer-container" 
        ref={containerRef}
        onScroll={handleScroll}
      >
        {totalPages === 0 ? (
          <div className="image-wrapper">
             <ImageViewer src={null} />
          </div>
        ) : (
          chapterImages.map((imgUrl, index) => (
            <div key={index} className="image-wrapper">
              <ImageViewer src={imgUrl} alt={`Page ${index + 1}`} />
            </div>
          ))
        )}
      </div>
      
      {totalPages > 0 && (
        <NavigationControls 
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
