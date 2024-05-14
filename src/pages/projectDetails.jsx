import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';

const ProjectDetails = ({ language, toggleLanguage }) => {
  const { slug } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/projects?slug=${slug}&populate=logo`)
      .then(response => response.json())
      .then(data => {
        const project = data.data.find(project => project.attributes.slug === slug);
        if (project) {
          setProjectDetails(project);
        } else {
          console.log("Aucun projet trouvé avec ce slug.");
        }
      })
      .catch(error => console.error('Error fetching project details:', error));
  }, [slug]);

  return (
    <div>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      {projectDetails ? (
        <div className='detail-container'>
          <h2 className='detail-title'>{language === 'en' ? projectDetails.attributes.title.toUpperCase() : language === 'fr' ? projectDetails.attributes.title.toUpperCase() : projectDetails.attributes.title}</h2>
          <p className='detail-description'>{language === 'en' ? projectDetails.attributes.description : projectDetails.attributes.description_fr}</p>
          <p className='detail-date'>{language === 'en' ? 'Created on' : 'Créé le'} {projectDetails.attributes.released_date}</p>
          <p className='detail-content'>{language === 'en' ? projectDetails.attributes.content : projectDetails.attributes.content_fr}</p>
          <img className='detail-img' src={`http://localhost:1337${projectDetails.attributes.logo.data.attributes.url}`} alt={projectDetails.attributes.logo.data.attributes.name} />
        </div>
      ) : (
        <p>{language === 'en' ? 'Loading' : 'Chargement'}</p>
      )}
    </div>
  );
}

export default ProjectDetails;






