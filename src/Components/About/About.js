import React from 'react'
import whatIDo from "../../data/whatIdo.json"
import "./About.css"
function About() {
    const paraClass = "text-pretty pb-4"
  return (
    <div className='xl:px-12 xl:py-10 xs:px-8 xs:py-6 text-justify'>
        <h1 className='text-4xl font-bold pb-4 flex items-center'>
            About <div className='w-[50%] h-[1px] ml-8 styleHeading'></div>
        </h1>
        <p className={paraClass}>
            Hi there! I'm Gaurang Gupta, a tech enthusiast specializing in web development, education, and Android app creation with three years of experience. Currently at Samsung R&D Institute in Bangalore, India, I contribute to big data projects. 
        </p>
        <p className={paraClass}>
            Passionate about education, I share my expertise through engaging lectures. With a Bachelor's in Electronics and Communication Engineering, I'm committed to pushing tech boundaries. Let's innovate together!
        </p>

        <h2 className='xs:text-lg sm:text-2xl font-semibold mt-6 flex items-center mb-4'>
            <div className='xs:w-[50%] sm:w-[20%]'>What I do!</div>
            <div className='xs:hidden sm:block sm:w-[50%] h-[1px] ml-8 styleHeading'></div>
        </h2>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4'>
            {whatIDo.whatIDo.map((item, index) => (
                <div key={index} className='bg-slate-100 p-4 rounded-xl'>
                    <h3 className='text-xl font-semibold mb-3'>{item.title}</h3>
                    <p className='text-sm'>{item.desc}</p>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default About