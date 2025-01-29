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
    <div className='h-lvh flex bg-white  items-center justify-center'>
   
      <div className='flex flex-col w-3/4 mx-auto gap-2 items-center justify-center'>
    <div className=' relative'>
    <h1 className='text-8xl font-cursive absolute -top-14 text-hora'>Services</h1>
    <h1 className='text-4xl font-semibold relative z-10 '>Catering Services</h1>
    </div>
      <div className='grid grid-cols-3 gap-4 items-center mt-12   h-80'>
        {
          cateringServices.map((val,i)=>{
            return(
              <div key={i} className='flex flex-col items-center justify-center h-full shadow-xl  '>
                <div className='text-5xl text-center text-hora'>{val.icon}</div>
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
