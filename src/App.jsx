import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProjectDetails from './pages/projectDetails';
import AllProjects from './pages/allProjects';
import { ThemeProvider } from './components/themeProvider';
import ToggleSwitch from './components/toggleSwitch';

const App = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <ToggleSwitch/>
          <Routes>
            <Route path="/" element={<Home language={language} toggleLanguage={toggleLanguage} />} />
            <Route path="/project/:slug" element={<ProjectDetails language={language} toggleLanguage={toggleLanguage} />} />
            <Route path="/projects" element={<AllProjects language={language} toggleLanguage={toggleLanguage} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;



