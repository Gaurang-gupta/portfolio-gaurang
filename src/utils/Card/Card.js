import React from 'react'

function Card({id, time, degree, place, exp}) {
  return (
    <div className={`pl-4 py-5 rounded-3xl mb-2 ${
        exp ?
        Number(id) % 2 === 0 ? "bg-[#eefff5]" : "bg-[#FEFEE8]" :
        Number(id) % 2 === 0 ? "bg-[#FEFEE8]" : "bg-[#eefff5]"
    }`}>
        <div className='text-sm'>
            {time}
        </div>
        <div className='text-xl font-bold'>
            {degree}
        </div>
        <div className='text-md text-gray-500'>
            {place}
        </div>
    </div>
  )
}

export default Card