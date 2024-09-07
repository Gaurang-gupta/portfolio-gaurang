import React from 'react'
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
function Navbar() {
    const optionClass = 'xs:p-2 xs:mx-0 lg:p-3 py-2 px-4 rounded-lg lg:mx-2 bg-slate-100 hover:bg-[#85FFBD] flex flex-col items-center cursor-pointer my-2'
    const iconClass = 'xs:text-sm sm:text-xl'
    const titleStyle = "xs:text-sm sm:text-md"
  return (
    <nav className='flex lg:justify-end xs:justify-between'>
        <div className='bg-white grid rounded-lg xs:w-full grid-cols-4 gap-8 xs:gap-4 lg:w-max px-4 py-2'>
            <Link to={"/"} className={optionClass}>
                <MdOutlinePersonOutline className={iconClass}/>
                <div className={titleStyle}>About</div>
            </Link>
            <Link to={"/resume"} className={optionClass}>
                <HiOutlineClipboardDocumentList className={iconClass}/>
                <div className={titleStyle}>Resume</div>
            </Link>
            <Link to={"/works"} className={optionClass}>
                <PiSuitcaseSimpleLight className={iconClass}/>
                <div className={titleStyle}>Works</div>
            </Link>
            <Link to={"/contact"} className={optionClass}>
                <RiContactsLine className={iconClass}/>
                <div className={titleStyle}>Contact</div>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar