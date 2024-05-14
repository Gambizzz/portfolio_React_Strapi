import React from 'react';
import Navbar from '../components/navbar';
import Works from '../components/works';

const AllProjects = ({ language, toggleLanguage }) => {
  return (
    <div>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <Works language={language} toggleLanguage={toggleLanguage}/>
    </div>
  );
};

export default AllProjects;
