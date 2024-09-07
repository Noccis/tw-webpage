import React from 'react'
import data from '../local-json/projects.json'
import '../styles/portfolio.css'

const Portfolio = () => {
  let listOfProjects = null;

  if (data != null) {
    listOfProjects = data.map((project, index) => (
      <div key={index} id='project-item'>
        <div id='project-text'>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div id='tag-container'>
            {
              project.tags.map((tag, index) =>
              <p key={index}>{tag}</p>)
            }
          </div>
          
        </div>       
        <img className='project-image' src={project.image_url} />
      </div>
    )
    )
  }

  return (
    <div id='portfolio-container'>
      {listOfProjects}
    </div>
  )
}

export default Portfolio