import React, { useState, useRef, useEffect } from 'react';
import SearchResults from './SearchResults';
import { data, subjectMeta } from '../data/data';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const matchQuery = query.toLowerCase().trim();
  let results = [];

  if (matchQuery.length > 0) {
    Object.keys(data).forEach(subjectKey => {
      const meta = subjectMeta[subjectKey] || { name: subjectKey, subtitle: '' };
      const isSubjectMatch = meta.name.toLowerCase().includes(matchQuery) || meta.subtitle.toLowerCase().includes(matchQuery);
      
      const chapters = Object.keys(data[subjectKey] || {});
      const matchedChapters = chapters.filter(ch => ch.toLowerCase().includes(matchQuery));

      if (isSubjectMatch || matchedChapters.length > 0) {
        results.push({
          subjectKey,
          name: meta.name,
          chapters: matchedChapters,
          isSubjectMatch
        });
      }
    });
  }

  return (
    <div className="search-wrapper" ref={wrapperRef}>
      <div className={`search-input-box ${isFocused ? 'focused' : ''}`}>
        <span className="icon-search">🔍</span>
        <input 
          type="text" 
          placeholder="Search subjects or chapters" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
        {query && (
          <button className="search-clear" onClick={() => { setQuery(''); setIsFocused(false); }}>
            ✕
          </button>
        )}
      </div>

      {isFocused && query && (
         <SearchResults results={results} query={matchQuery} onClose={() => setIsFocused(false)} />
      )}
    </div>
  );
}
