import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { 
    CiMobile2, 
    CiMail, 
    CiLocationOn,
    CiCalendarDate
} from "react-icons/ci";

function Sidebar() {
    const links = [
        {
            name: "instagram",
            link: "",
            color: "text-pink-500 md:text-lg lg:text-xl xl:text-2xl",
            icon: <FaSquareInstagram/>
        },
        {
            name: "linkedin",
            link: "",
            color: "text-blue-500 md:text-lg lg:text-xl xl:text-2xl",
            icon: <FaLinkedin/>
        },
        {
            name: "youtube",
            link: "https://www.youtube.com/channel/UCpMkEE04DkLga4DfqqseRhw",
            color: "text-red-500 md:text-lg lg:text-xl xl:text-2xl",
            icon: <FaYoutube/>
        },
        {
            name: "Github",
            link: "https://github.com/Gaurang-gupta",
            color: "text-black md:text-lg lg:text-xl xl:text-2xl",
            icon: <FaGithub/>
        }
    ]

    const details = [
        {
            detail: "Phone",
            value: "+917009154124",
            icon: <CiMobile2 />,
        },
        {
            detail: "Email",
            value: "g12172001@gmail.com",
            icon: <CiMail/>,
        },
        {
            detail: "Location",
            value: "Bengaluru, India",
            icon: <CiLocationOn/>,
        },
        {
            detail: "Birthday",
            value: "December 17, 2001",
            icon: <CiCalendarDate/>,
        },
    ]
  return (
    <div className='lg:w-1/4 lg:block sm:w-full sm:flex'>
    <div className='relative top-[3.5rem] xl:left-[4.5rem] lg:left-[4rem] md:left-[3.5rem] rounded-xl md:w-1/4 lg:w-1/2'>
        <img src="https://avatars.githubusercontent.com/u/65450469?s=400&u=1d2375c5b685208b1e694244eedd3a257c1885 6c&v=4"
            className=' mx-auto rounded-xl'/>
    </div>
    <aside className='pt-12 pb-2 bg-slate-50 text-center rounded-xl sm:flex lg:block'>
        <div className='w-4/5 mx-auto'>
            <p className='py-3 lg:text-2xl font-semibold sm:text-lg'>
                Gaurang Gupta
            </p>
            <p className='px-3 py-2 bg-slate-100 lg:rounded-2xl sm:rounded-lg sm:text-sm lg:text-lg'>
                Web Developer
            </p>
            <ul className='flex justify-around text-2xl text-center mt-6 mb-12'>
                {links.map(link => (
                    <a href={link.link} className={link.color}>
                        {link.icon}
                    </a>
                ))}
            </ul>
        </div>
        <div className='text-left w-4/5 mx-auto my-6'>
            {details.map(detail => (
                <div className='px-2 bg-slate-100 my-2 py-2 flex rounded-lg items-center'>
                    <div className='md:text-2xl lg:text-2xl xl:text-3xl font-thin pr-2 lg:block md:hidden xs:hidden sm:hidden'>
                        {detail.icon}
                    </div>
                    <div>
                        <p className='text-xs text-gray-500'>{detail.detail}</p>
                        <p className='xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-md'>{detail.value}</p>
                    </div>
                </div>
            ))}
        </div>
    </aside>
    </div>
  )
}

export default Sidebar