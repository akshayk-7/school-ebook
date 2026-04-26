import React from 'react';
import { useNavigate } from 'react-router-dom';
import { data, subjectMeta } from '../data/data';
import SubjectCard from '../components/SubjectCard';

export default function SubjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="page-layout" style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', width: '100%' }}>
      <header className="header" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <button className="icon-btn" onClick={() => navigate(-1)}>←</button>
        <h1>All Subjects</h1>
        <div className="placeholder" style={{width: '40px'}}></div>
      </header>

      <main style={{paddingTop: '20px'}}>
        <div className="subjects-stack">
          {Object.keys(data).map((subjectKey) => {
            const meta = subjectMeta[subjectKey] || { name: subjectKey, icon: '📄', subtitle: 'Explore topics' };
            return (
              <SubjectCard 
                key={subjectKey}
                subjectKey={subjectKey}
                title={meta.name}
                subtitle={meta.subtitle}
                icon={meta.icon}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
