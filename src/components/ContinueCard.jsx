import React from 'react';
import { Link } from 'react-router-dom';

export default function ContinueCard({ subjectKey, title, chapterTitle, icon, progress }) {
  return (
    <Link to={`/subject/${subjectKey}/ch1`} className="continue-card">
      <div className="continue-card-top">
        <span className="continue-icon">{icon}</span>
        <span className="continue-badge">{progress}%</span>
      </div>
      <div className="continue-card-mid">
        <h3>{title}</h3>
        <p>{chapterTitle}</p>
      </div>
      <div className="progress-bar-thin">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </Link>
  );
}
