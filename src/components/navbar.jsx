import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleLanguage, language }) => {
  return (
    <div className="nav">
      <a href='https://github.com/Gambizzz'>Github</a>
      <div className='logo'>
        <h1>PORTFOLIO</h1>
      </div>
      <Link to="/">{language === 'en' ? 'Home' : 'Accueil'}</Link>
      <Link to="/projects">{language === 'en' ? 'Projects' : 'Projets'}</Link>
      <Link to="/cv">{language === 'en' ? 'CV' : 'CV'}</Link>
      <div className="checkbox-wrapper-10">
        <input 
          checked={language === 'en'} 
          type="checkbox" 
          id="cb5" 
          className="tgl tgl-flip" 
          onChange={toggleLanguage}
        />
        <label htmlFor="cb5" data-tg-on="Fr" data-tg-off="En" className="tgl-btn"></label>
      </div>
    </div>
  );
};

export default Navbar;









