import React from 'react'
import Card from '../../utils/Card/Card'
import { PiGraduationCapLight, PiSuitcaseSimpleLight } from "react-icons/pi";
import WorkingSkills from '../../utils/Working/WorkingSkills';

function Resume() {
    const education = [
        {
            id:1,
            time:"2019-2023",
            degree:"B.Tech",
            place:"NIT Jalandhar",
        },
        {
            id:2,
            time:"2023-2023",
            degree: "Tensorflow Developer",
            place: "DeepLearning.AI"
        }
    ]

    const experience = [
        {
            id:1,
            time: "2023-present",
            degree: "Engineer",
            place: "Samsung R&D Bangalore"
        }
    ]

    const workingSkills = [
        {
            id: 1,
            skill: "Javascript",
            percentage: "90%",
            color: "pink", 
        },
        {
            id: 2,
            skill: "React",
            percentage: "85%",
            color: "purple", 
        },
        {
            id: 3,
            skill: "Python",
            percentage: "80%",
            color: "blue", 
        },
        {
            id: 4,
            skill: "Firebase",
            percentage: "80%",
            color: "magenta", 
        }
    ]

    const knowledges = [
        "HTML", "CSS", "Javascript",
        "ReactJS", "Firebase", "Python",
        "Sklearn", "Tensorflow", "Java"
    ]
  return (
    <div className='xl:px-12 xl:py-10 xs:px-8 xs:py-6 text-justify w-full'>
        <h1 className='text-4xl font-bold pb-4 flex items-center'>
            Resume <div className='w-[50%] h-[1px] ml-8 styleHeading'></div>
        </h1>

        <main className='flex justify-between xs:flex-col sm:flex-row w-full'>
            <div className='xs:w-[100%] sm:w-[49%]'>
                <h1 className='text-2xl pb-2 flex items-center'>
                    <PiGraduationCapLight className='mr-2'/>
                    Education
                </h1>
                {education.map(edu => (
                    <Card exp={false} key={edu.id} id={edu.id} time={edu.time} degree={edu.degree} place={edu.place}/>
                ))}
            </div>
            <div className='xs:w-[100%] sm:w-[49%] xs:pt-5 sm:pt-0'>
                <h1 className='text-2xl pb-2 flex items-center'>
                    <PiSuitcaseSimpleLight className='mr-2'/>
                    Experience
                </h1>
                {experience.map(exp => (
                    <Card exp={true} key={exp.id} id={exp.id} time={exp.time} degree={exp.degree} place={exp.place}/>
                ))}
            </div>
        </main>

        <main className='flex justify-between xs:flex-col sm:flex-row bg-slate-100 mt-3 px-3 py-3 rounded-xl'>
            <div className='xs:w-[100%] sm:w-[49%]'>
                <h1 className='text-2xl pb-2 flex items-center'>
                    Working Skills
                </h1>
                {workingSkills.map(work => (
                    <WorkingSkills 
                        key={work.id} 
                        skill={work.skill} 
                        percentage={work.percentage}
                        color={work.color}
                    />
                ))}
            </div>
            <div className='xs:w-[100%] sm:w-[49%]'>
                <h1 className='text-2xl pb-2 flex items-center'>
                    Knowledges
                </h1>
                <div className='w-full flex flex-wrap'>
                    {knowledges.map((skill, index) => (
                        <div className='inline bg-slate-300 px-4 py-2 rounded-xl m-2' key={index}>{skill}</div>
                    ))}
                </div>
                
            </div>
        </main>
    </div>
  )
}

export default Resume