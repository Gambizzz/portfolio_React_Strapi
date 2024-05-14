import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Works = ({ language }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/projects?populate=logo')
      .then(response => response.json())
      .then(data => setProjects(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const texts = {
    en: {
      projectsText: 'You can find the list of my projects below. Some of them I created during my training at The Hacking Project, and others are personal projects.'
    },
    fr: {
      projectsText: 'Vous pouvez trouver ci-dessous la liste de mes projets. Certains d\'entre eux ont été créés lors de ma formation à The Hacking Project, et d\'autres sont des projets personnels.'
    }
  };

  return (
    <div>
      <p className='projects-text'>{texts[language].projectsText}</p>
      <div className='card-project-container'>
        {projects.map(project => (
          <Link to={`/project/${project.attributes.slug}`} key={project.id} className='card-project'>
            <div>
              <h3 className='projects-title'>{project.attributes.title}</h3>
              <p className='projects-description'>{project.attributes.description}</p>
              <img src={`http://localhost:1337${project.attributes.logo.data.attributes.url}`} alt={project.attributes.logo.data.attributes.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Works;




