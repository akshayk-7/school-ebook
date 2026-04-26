import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubjectsPage from './pages/SubjectsPage';
import Subject from './pages/Subject';
import ChapterPage from './pages/ChapterPage';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/subject/:subject" element={<Subject />} />
        <Route path="/subject/:subject/:chapter" element={<ChapterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
