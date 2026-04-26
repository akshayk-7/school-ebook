import React from 'react';
import { Link } from 'react-router-dom';

const highlightText = (text, highlight) => {
  if (!highlight.trim()) return text;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return parts.map((part, index) => 
    part.toLowerCase() === highlight.toLowerCase() ? <span key={index} className="match-highlight">{part}</span> : part
  );
};

export default function SearchResults({ results, query, onClose }) {
  if (results.length === 0) {
    return (
      <div className="search-results">
        <div className="search-result-item" style={{textAlign: 'center', color: 'var(--text-secondary)'}}>
           No results found for "{query}"
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      {results.map((res) => (
        <React.Fragment key={res.subjectKey}>
          {res.isSubjectMatch && (
            <Link to={`/subject/${res.subjectKey}`} onClick={onClose} className="search-result-item">
               <span className="search-result-title">{highlightText(res.name, query)}</span>
               <span className="search-result-sub">Subject</span>
            </Link>
          )}
          {res.chapters.map(ch => (
             <Link key={`${res.subjectKey}-${ch}`} to={`/subject/${res.subjectKey}/${ch}`} onClick={onClose} className="search-result-item">
               <span className="search-result-title">{res.name} • {highlightText(ch, query)}</span>
               <span className="search-result-sub">Chapter</span>
             </Link>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
