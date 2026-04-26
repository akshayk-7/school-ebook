import React from 'react';
import { Link } from 'react-router-dom';
import { data, subjectMeta } from '../data/data';

export default function Home() {
  return (
    <main className="content">
      {Object.keys(data).map((subjectKey) => {
        const meta = subjectMeta[subjectKey] || { name: subjectKey, icon: '📄' };
        return (
          <Link key={subjectKey} to={`/subject/${subjectKey}`} className="subject-card">
            <h2>{meta.name}</h2>
            <span className="icon">{meta.icon}</span>
          </Link>
        );
      })}
    </main>
  );
}
