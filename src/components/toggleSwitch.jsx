import React, { useState } from 'react';
import { useTheme } from './themeProvider';

const ToggleSwitch = () => {
  const { isLightTheme, toggleTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(isLightTheme);

  const handleChange = () => {
    setIsChecked(!isChecked); // Bascule la valeur du bouton bascule
    toggleTheme(); // Bascule le thème

    const body = document.body;

    if (body) {
      body.style.setProperty('--c1', isLightTheme ? '#180a22' : '#FF5F2A');
      body.style.setProperty('--c2', isLightTheme ? '#5b42f3' : '#FFEEE0');
      body.style.setProperty('--_g', isLightTheme ? 'radial-gradient(25% 25% at 25% 25%, #180a22 99%, rgba(0, 0, 0, 0) 101%)' : 'radial-gradient(25% 25% at 25% 25%, #FF5F2A 99%, rgba(255, 255, 255, 0) 101%)');
      body.style.setProperty('background', 'var(--_g) var(--s) var(--s) / calc(2 * var(--s)) calc(2 * var(--s)), var(--_g) 0 0 / calc(2 * var(--s)) calc(2 * var(--s)), radial-gradient(50% 50%, var(--c2) 98%, rgba(0, 0, 0, 0)) 0 0 / var(--s) var(--s), repeating-conic-gradient(var(--c2) 0 50%, var(--c1) 0 100%) calc(0.5 * var(--s)) 0 / calc(2 * var(--s)) var(--s)');
    }

    const navbarLinks = document.querySelectorAll('.nav a');
    const navbarLogo = document.querySelector('.nav .logo');
    if (navbarLinks && navbarLogo) {
      navbarLinks.forEach(link => {
        link.style.color = isLightTheme ? 'orangered' : '#5b42f3';
      });
      navbarLogo.style.color = isLightTheme ? 'white' : 'black';
    }

    const title = document.querySelector('.title');
    if (title) {
      title.style.color = isLightTheme ? 'white' : 'black';
    }

    const job = document.querySelector('.job');
    if (job) {
      job.style.color = isLightTheme ? 'orangered' : '#5b42f3';
    }

    const presentation = document.querySelector('.presentation');
    if (presentation) {
      presentation.style.color = isLightTheme ? 'white' : 'black';
    }

    const textProject = document.querySelector('.projects-text');
    if (textProject) {
      textProject.style.color = isLightTheme ? 'white' : 'black';
    }

    const titleProject = document.querySelectorAll('.projects-title');
    titleProject.forEach(projectTitle => {
      if (projectTitle) {
        projectTitle.style.color = isLightTheme ? 'orangered' : '#5b42f3';
      }
    });

    const descriptionProject = document.querySelectorAll('.projects-description');
    descriptionProject.forEach(projectDescription => {
      if (projectDescription) {
        projectDescription.style.color = isLightTheme ? 'white' : 'black';
      }
    });

    const cardProjects = document.querySelectorAll('.card-project');
    cardProjects.forEach(card => {
      if (card) {
        card.style.borderColor = isLightTheme ? 'white' : '#5b42f3';
        card.style.backgroundColor = isLightTheme ? '#180a22' : 'white';
        
      }
    });

    const formText = document.querySelector('.form-text');
    if (formText) {
      formText.style.color = isLightTheme ? 'white' : 'black';
    }
  };

  return (
    <label className='toggle'>
      <input id='check' type='checkbox' onChange={handleChange} checked={isChecked} />
      <span></span>
      <label htmlFor='check' className='shadow'></label>
    </label>
  );
};

export default ToggleSwitch;


