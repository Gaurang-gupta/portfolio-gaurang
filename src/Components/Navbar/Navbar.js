import React from 'react'
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
function Navbar() {
    const optionClass = 'md:p-2 lg:p-3 xl:p-4 rounded-xl mx-2 bg-slate-50 hover:bg-gradient-to-r from-[#B2FFD4] to-[#33F58D] flex flex-col items-center cursor-pointer'
    const iconClass = 'md:text-xl lg:text-2xl xl:text-3xl'
  return (
    <nav className='flex justify-end'>
        <div className={optionClass}>
            <MdOutlinePersonOutline className={iconClass}/>
            About
        </div>
        <div className={optionClass}>
            <HiOutlineClipboardDocumentList className={iconClass}/>
            Resume
        </div>
        <div className={optionClass}>
            <PiSuitcaseSimpleLight className={iconClass}/>
            Works
        </div>
        <div className={optionClass}>
            <RiContactsLine className={iconClass}/>
            Contact
        </div>
    </nav>
  )
}

export default Navbar