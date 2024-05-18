import React from 'react'
import "./About.css"
function About() {
    const whatIDo = [
        {
            title: 'IIT/JEE classes',
            desc: "Hey there! I specialize in IIT/JEE coaching. It's all about guiding students towards acing those tough exams. We focus on deep understanding and strategic preparation. Got questions? Fire away!"
        },
        {
            title: "Machine Learning classes",
            desc: "Hey, I'm your go-to for machine learning coaching! Let's dive into the world of algorithms, data, and models. Whether you're a beginner or looking to fine-tune your skills, I've got you covered. Ready to unlock the potential of AI? Let's get started!"
        },
        {
            title: "Web Development",
            desc: "Hey, I'm your friendly neighborhood web developer! From crafting sleek designs to coding dynamic websites, I'm all about bringing your online vision to life. Let's chat about your project goals and how we can make your web presence shine. Ready to elevate your online game?"
        },
        {
            title: "App Development",
            desc: "Hey there! I'm your go-to app developer, passionate about turning ideas into innovative digital experiences. Whether it's iOS, Android, or cross-platform, I've got the skills to bring your app vision to reality. Let's brainstorm features, design sleek interfaces, and launch your app to the world!"
        }
    ]
    const paraClass = "text-pretty pb-4"
  return (
    <div className='xl:px-12 xl:py-10 xs:px-8 xs:py-6 text-justify'>
        <h1 className='text-4xl font-bold pb-4 flex items-center'>
            About <div className='w-[50%] h-[1px] ml-8 styleHeading'></div>
        </h1>
        <p className={paraClass}>
            Hi there! I'm Gaurang Gupta, a tech enthusiast specializing in web development, education, and Android app creation with three years of experience. Currently at Samsung R&D Institute in Bangalore, India, I contribute to cutting-edge projects. 
        </p>
        <p className={paraClass}>
            Passionate about education, I share my expertise through engaging lectures. With a Bachelor's in Electronics and Communication Engineering, I'm committed to pushing tech boundaries. Let's innovate together!
        </p>

        <h2 className='xs:text-lg sm:text-2xl font-semibold mt-6 flex items-center mb-4'>
            <div className='xs:w-[50%] sm:w-[20%]'>What I do!</div>
            <div className='xs:hidden sm:block sm:w-[50%] h-[1px] ml-8 styleHeading'></div>
        </h2>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4'>
            {whatIDo.map(item => (
                <div className='bg-slate-100 p-4 rounded-xl'>
                    <h3 className='text-xl font-semibold mb-3'>{item.title}</h3>
                    <p className='text-sm'>{item.desc}</p>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default About