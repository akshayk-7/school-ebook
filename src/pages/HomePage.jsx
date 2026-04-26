import React from 'react';
import { Link } from 'react-router-dom';
import { data, subjectMeta } from '../data/data';
import BottomNav from '../components/BottomNav';
import SearchBar from '../components/SearchBar';
import ContinueCard from '../components/ContinueCard';
import SubjectCard from '../components/SubjectCard';

export default function HomePage() {
  return (
    <div className="home-layout">
      {/* Functional Search Bar */}
      <SearchBar />

      <main style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '16px' }}>
        
        {/* Continue Learning Tracking */}
        <section>
          <div className="section-header">
            <h2>Continue Learning</h2>
          </div>
          <div className="horizontal-scroll">
            <ContinueCard subjectKey="maths" title="Mathematics" chapterTitle="Chapter 1" icon="➗" progress={65} />
            <ContinueCard subjectKey="science" title="Science" chapterTitle="Chapter 1" icon="🔬" progress={12} />
          </div>
        </section>

        {/* Modular Subjects List */}
        <section>
          <div className="section-header">
            <h2>Your Subjects</h2>
            <Link to="/subjects" className="text-btn">See All</Link>
          </div>
          <div className="subjects-stack">
            {Object.keys(data).slice(0, 3).map((subjectKey) => {
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
        </section>

      </main>

      <BottomNav />
    </div>
  );
}
