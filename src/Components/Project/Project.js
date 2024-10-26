import React from 'react'
import projects from "../../data/data.json"
import ProjectCard from '../../utils/ProjectCard/ProjectCard'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";

function Project() {
  const path = window.location.pathname.split("/")
  const projectsData = projects[path[2]]
  return (
    <main className='xl:px-12 xl:pb-10 xs:px-8 xs:pb-6 text-justify w-full'>
      <div className='sticky top-0 xl:pt-10 xs:pt-6 text-justify w-full bg-white'>
        <Link to={"/works"} className='flex items-center text-2xl pb-2'>
          <IoMdArrowBack/>
        </Link>
        
        <h1 className='sm:text-4xl font-bold pb-4 flex items-center xs:text-xl'>
          {path[2]} Projects <div className='xs:hidden sm:block w-[50%] h-[1px] ml-8 styleHeading'></div>
        </h1>
      </div>
      
      <div>
      {projectsData?.map(project => (
        <ProjectCard 
          key={project.id}
          name={project.name}
          summary={project.summary}
          github={project.github}
          deployment={project.deployment}
        />
      ))}
      </div>
      
    </main>
  )
}

export default Project
