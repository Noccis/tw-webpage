import React from 'react'
import data from '../local-json/projects.json'
import '../styles/portfolio.css'

const Portfolio = () => {
  let listOfProjects = null;

  if (data != null) {
    listOfProjects = data.map(project => (
      <div key={project.title} id='project-container'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <img className='project-image' src={project.image_url}/>
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