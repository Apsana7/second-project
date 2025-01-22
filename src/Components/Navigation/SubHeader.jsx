import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

function SubHeader() {
  return (
    <div className=' border-b shadow-lg border-gray-700  flex items-center  justify-center py-2 text-gray-500'>
     <div className='flex items-center justify-between w-3/4'>

     <div className='flex  gap-1 items-center'>
        <div><FaPhoneAlt /></div>
        <div>+1235 2355 98</div>
      </div>

      <div className='flex gap-1 items-center'>
        <div><SiMinutemailer /></div>
        <div>youremail@email.com</div>
      </div>

      <div>Open hours:Monday-Sunday 8:00AM-9:00PM</div>

     </div>
    </div>
  )
}

export default SubHeader
