import React from 'react'
import projects from "../../data/data.json"
import ProjectCard from '../../utils/ProjectCard/ProjectCard'

function Project() {
  const path = window.location.pathname.split("/")
  const projectsData = projects[path[2]]
  return (
    <main className='xl:px-12 xl:py-10 xs:px-8 xs:py-6 text-justify w-full'>
      <h1 className='text-4xl font-bold pb-4 flex items-center'>
        {path[2]} Projects <div className='xs:hidden sm:block w-[50%] h-[1px] ml-8 styleHeading'></div>
      </h1>

      {projectsData.map(project => (
        <ProjectCard 
          key={project.id}
          name={project.name}
          summary={project.summary}
          github={project.github}
          deployment={project.deployment}
        />
      ))}
    </main>
  )
}

export default Project