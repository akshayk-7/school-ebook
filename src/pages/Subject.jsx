import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { data, subjectMeta } from '../data/data';

export default function Subject() {
  const { subject } = useParams();
  const subjectData = data[subject];

  if (!subjectData) {
    return <Navigate to="/" replace />;
  }

  const meta = subjectMeta[subject] || { name: subject };

  return (
    <main className="content">
      <h2 style={{ marginBottom: '16px' }}>{meta.name} Chapters</h2>
      <div className="chapter-list">
        {Object.keys(subjectData).map((chapKey) => (
          <Link key={chapKey} to={`/subject/${subject}/${chapKey}`} className="chapter-btn">
            <span>{chapKey.toUpperCase()}</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {subjectData[chapKey].length} pages
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
