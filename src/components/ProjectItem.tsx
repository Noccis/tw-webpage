import React from 'react'

type ProjectItemProps = {
    title: string,
    description: string
   
};

const ProjectItem = ({title, description}: ProjectItemProps) => {
   
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ProjectItem