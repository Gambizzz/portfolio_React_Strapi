import React from 'react';
import Navbar from '../components/navbar';
import Works from '../components/works';
import ContactForm from '../components/contactForm';

const Home = ({ language, toggleLanguage }) => {
  return (
    <div>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <h1 className='title'>{language === 'en' ? 'ANELISE GAMBINI' : 'ANELISE GAMBINI'}</h1>
      <p className='job'>{language === 'en' ? 'Fullstack web developer' : 'Développeur web fullstack'}</p>
      <p className='presentation'>{language === 'en' ? "For several months, I have been learning web development thanks to The Hacking Project. I was able to learn how to use Ruby, Rails, JavaScript and React." : "Pendant plusieurs mois, j'ai appris le développement web grâce à The Hacking Project. J'ai pu apprendre à utiliser Ruby, Rails, JavaScript et React."}</p>
      <Works language={language} toggleLanguage={toggleLanguage} />
      <p className='form-text'>{language === 'en' ? "Would you like to chat with me, whether to offer me a position or discuss my projects? Fill out the form below, I will contact you as soon as I can." : "Souhaitez-vous discuter avec moi, que ce soit pour me proposer un poste ou discuter de mes projets ? Remplissez le formulaire ci-dessous, je vous contacterai dès que possible."}</p>
      <ContactForm language={language} toggleLanguage={toggleLanguage} />
    </div>
  );
};

export default Home;


