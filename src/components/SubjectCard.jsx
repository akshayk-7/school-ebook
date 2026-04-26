import React from 'react';
import { Link } from 'react-router-dom';

export default function SubjectCard({ subjectKey, title, subtitle, icon }) {
  return (
    <Link to={`/subject/${subjectKey}`} className="subject-card">
      <div className="subject-card-left">
        <span className="subject-icon">{icon}</span>
        <div className="subject-info">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <span className="subject-arrow">➔</span>
    </Link>
  );
}
