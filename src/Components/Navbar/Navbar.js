import React from 'react'
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
function Navbar() {
    const optionClass = 'xs:p-2 xs:mx-0 lg:p-3 xl:p-4 rounded-xl lg:mx-2 bg-slate-50 hover:bg-gradient-to-r from-[#B2FFD4] to-[#33F58D] flex flex-col items-center cursor-pointer'
    const iconClass = 'xs:text-sm md:text-xl lg:text-2xl xl:text-3xl'
    const titleStyle = "xs:text-sm lg:text-lg"
  return (
    <nav className='flex lg:justify-end xs:justify-between'>
        <div className={optionClass}>
            <MdOutlinePersonOutline className={iconClass}/>
            <div className={titleStyle}>About</div>
        </div>
        <div className={optionClass}>
            <HiOutlineClipboardDocumentList className={iconClass}/>
            <div className={titleStyle}>Resume</div>
        </div>
        <div className={optionClass}>
            <PiSuitcaseSimpleLight className={iconClass}/>
            <div className={titleStyle}>Works</div>
        </div>
        <div className={optionClass}>
            <RiContactsLine className={iconClass}/>
            <div className={titleStyle}>Contact</div>
        </div>
    </nav>
  )
}

export default Navbar