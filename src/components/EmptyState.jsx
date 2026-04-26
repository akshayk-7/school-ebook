import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmptyState() {
  const navigate = useNavigate();
  return (
    <div className="empty-state">
      <div className="empty-content">
        <span className="empty-icon">📂</span>
        <h3>Content not available yet</h3>
        <p>This chapter's images haven't been uploaded.</p>
        <button className="primary-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}
