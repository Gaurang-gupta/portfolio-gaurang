import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";
function ProjectCard({
    name,
    summary,
    github,
    deployment
}) {
  return (
    <div className='pb-6'>
        <h3 className='text-2xl text-gray-600'>{name}</h3>
        <p className='text-justify py-3'>{summary}</p>
        <div className='flex justify-between text-xl sm:w-[10%] xs:w-[20%]'>
            <a href={github}>
                <FaGithub/>
            </a>
            {deployment !== "" && 
            <a href={deployment}>
                <IoLinkOutline/>
            </a>}
        </div>
    </div>
  )
}

export default ProjectCard