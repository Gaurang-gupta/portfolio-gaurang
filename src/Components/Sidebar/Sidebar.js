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
            color: "mx-auto text-pink-500 md:text-lg lg:text-xl xl:text-2xl",
            icon: <FaSquareInstagram/>
        },
        {
            name: "linkedin",
            link: "",
            color: "mx-auto text-blue-500 md:text-lg lg:text-xl xl:text-2xl",
            icon: <FaLinkedin/>
        },
        {
            name: "youtube",
            link: "https://www.youtube.com/channel/UCpMkEE04DkLga4DfqqseRhw",
            color: "mx-auto text-red-500 md:text-lg lg:text-xl xl:text-2xl",
            icon: <FaYoutube/>
        },
        {
            name: "Github",
            link: "https://github.com/Gaurang-gupta",
            color: "mx-auto text-black md:text-lg lg:text-xl xl:text-2xl",
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
            value: "Dec 17, 2001",
            icon: <CiCalendarDate/>,
        },
    ]
  return (
    <div className='lg:w-1/3 xl:w-1/4 lg:block xs:w-4/5 xs:mx-auto text-wrap'>
    <aside className='mt-[2rem] lg:pt-6 pb-2 bg-slate-50 text-center rounded-xl xs:flex lg:block xs:items-center xs:pt-0 xs:px-4 lg:px-0'>
        <div className='xs:hidden w-3/5 xs:h-3/5 lg:h-full mx-auto shadow-lg rounded-xl object-contain sm:block'>
            <img src="https://avatars.githubusercontent.com/u/65450469?s=400&u=1d2375c5b685208b1e694244eedd3a257c1885 6c&v=4"
                className='rounded-xl h-full w-full object-cover' alt="developer"/>
        </div>
        <div className='w-4/5 mx-auto xs:px-4 lg:px-0'>
            <p className='py-3 lg:text-2xl font-semibold sm:text-lg'>
                Gaurang Gupta
            </p>
            <p className='px-3 py-2 bg-slate-100 lg:rounded-2xl sm:rounded-lg sm:text-sm lg:text-lg'>
                Web Developer
            </p>
            <ul className='sm:flex sm:justify-around text-2xl text-center sm:mt-6 sm:mb-12 xs:grid xs:grid-cols-2 xs:gap-2 xs:mt-4 xs:mb-6'>
                {links.map(link => (
                    <a href={link.link} className={link.color}>
                        {link.icon}
                    </a>
                ))}
            </ul>
        </div>
        <div className='text-left w-4/5 mx-auto my-6'>
            {details.map(detail => (
                <div className='px-2 bg-slate-100 my-2 py-2 flex rounded-lg items-center sm:w-full xs:w-full'>
                    <div className='md:text-2xl lg:text-2xl xl:text-3xl font-thin pr-2 lg:block md:hidden xs:hidden sm:hidden'>
                        {detail.icon}
                    </div>
                    <div className=''>
                        <p className='text-xs text-gray-500'>{detail.detail}</p>
                        <p className='xs:text-xs lg:text-md break-all'>{detail.value}</p>
                    </div>
                </div>
            ))}
        </div>
    </aside>
    </div>
  )
}

export default Sidebar