import React from 'react'
import { BsCake2Fill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa6";

function Services() {
  const cateringServices = [
    {
      icon: <BsCake2Fill />,
      title:"Birthday Party",
      description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon: <FaPeopleGroup />,
      title:"Business Meeting",
      description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon:<FaUtensils />,
      title:"Wedding party",
      description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    }
   
  ] 
  
  return (
    <div className='h-lvh flex bg-gray-100  items-center justify-center'>
   
      <div className='flex flex-col w-3/4 mx-auto gap-4 items-center justify-center'>
      <h1 className='text-4xl text-orange-400'>Services</h1>
      <h1 className='text-4xl font-semibold '>Catering Services</h1>
      <div className='grid grid-cols-3 gap-4 items-center mt-12'>
        {
          cateringServices.map((val,i)=>{
            return(
              <div key={i} className='flex flex-col items-center justify-center'>
                <div className='text-5xl text-center text-orange-300'>{val.icon}</div>
                <div className='text-2xl text-center font-semibold mt-4'>{val.title}</div>
                <div className='text-lg text-center text-gray-500 mt-4'>{val.description}</div>
              </div>
            )
          })
        }
      </div>
      </div>
     
    </div>
  )
}

export default Services
