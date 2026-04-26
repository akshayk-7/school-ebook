import React from 'react';
import { Link } from 'react-router-dom';
import { data, subjectMeta } from '../data/data';
import BottomNav from '../components/BottomNav';

export default function Home() {
  return (
    <div className="home-layout">
      {/* Hero / Greeting Section */}
      <section className="greeting-section">
        <div className="greeting-header">
          <div>
            <p className="greeting-sub">Hello there, student 👋</p>
            <h2 className="greeting-title">What do you want to study today?</h2>
          </div>
          <div className="profile-avatar">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="Profile" />
          </div>
        </div>

        <div className="home-search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search subjects, chapters, or topics..." />
        </div>
      </section>

      <main className="home-content">
        {/* Continue Learning Row */}
        <section className="horizontal-section">
          <div className="section-header">
            <h3>Continue Learning</h3>
            <span className="see-all">See All</span>
          </div>
          <div className="scroll-row">
            <Link to="/subject/maths/ch1" className="continue-card gradient-maths">
              <div className="card-top">
                <div className="icon-wrapper">➗</div>
                <span className="progress-badge">65%</span>
              </div>
              <div className="card-bottom">
                <h4>Mathematics</h4>
                <p>Chapter 1: Basics</p>
              </div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '65%' }}></div></div>
            </Link>

            <Link to="/subject/science/ch1" className="continue-card gradient-science">
              <div className="card-top">
                <div className="icon-wrapper">🔬</div>
                <span className="progress-badge">12%</span>
              </div>
              <div className="card-bottom">
                <h4>Science</h4>
                <p>Chapter 1: Nature</p>
              </div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '12%' }}></div></div>
            </Link>
          </div>
        </section>

        {/* Subjects Listing */}
        <section className="subjects-section">
          <h3>Your Subjects</h3>
          <div className="subjects-grid">
            {Object.keys(data).map((subjectKey) => {
              const meta = subjectMeta[subjectKey] || { name: subjectKey, icon: '📄', subtitle: 'Explore topics' };
              return (
                <Link key={subjectKey} to={`/subject/${subjectKey}`} className={`subject-modern-card card-${subjectKey}`}>
                  <div className="subject-info">
                    <h2>{meta.name}</h2>
                    <p>{meta.subtitle}</p>
                  </div>
                  <div className="subject-icon-bg">
                    {meta.icon}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Recommended Topics */}
        {/* <section className="topics-section">
          <h3>Popular Topics</h3>
          <div className="topics-list">
            <div className="topic-pill"># Algebra Basics</div>
            <div className="topic-pill"># Human Anatomy</div>
            <div className="topic-pill"># Poetry Analysis</div>
            <div className="topic-pill"># Organic Chemistry</div>
            <div className="topic-pill"># Geometry Patterns</div>
          </div>
        </section> */}
      </main>

      <BottomNav />
    </div>
  );
}
