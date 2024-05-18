import React from 'react'

function Contact() {
    const divStyle = "w-full flex flex-col pb-7"
    const inputStyle = "border-b-2 outline-0"
  return (
    <div className='xl:px-12 xl:py-10 xs:px-8 xs:py-6 text-justify w-full'>
        <h1 className='text-4xl font-bold pb-4 flex items-center'>
            Contact <div className='w-[50%] h-[1px] ml-8 styleHeading'></div>
        </h1>
        <div className='px-4 py-1'>
            <h3 className='text-xl'>I'm always open to discussing product</h3>
            <h2 className='text-2xl font-bold'>Development or partnerships</h2>
            <form className='w-full pt-4'>
                <div className={divStyle}>
                    <label>Name</label>
                    <input className={inputStyle} type="text" name="user_name" />
                </div>
                <div className={divStyle}>
                    <label>Email</label>
                    <input className={inputStyle} type="email" name="user_email" />
                </div>
                <div className={divStyle}>
                    <label>Message</label>
                    <textarea className={inputStyle} name="message" />
                </div>
                <button className='border border-[#85FFBD] hover:border-[#4fee99] px-4 py-2 rounded-xl hover:scale-105' type="submit" value="Send">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact