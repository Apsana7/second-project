import React from 'react'
import { BsCake2Fill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa6";

function Services() {
  const cateringServices = [
    {
      icon: <BsCake2Fill />,
      title: "Birthday Party",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon: <FaPeopleGroup />,
      title: "Business Meeting",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon: <FaUtensils />,
      title: "Wedding Party",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    }
  ];

  return (
    <div className='bg-white h-full  flex flex-col items-center justify-start lg:py-20 py-16'>
      <div className='w-11/12 lg:w-3/4 mx-auto flex flex-col gap-8 items-center'>
      
     
         <div className='w-full relative flex flex-col items-center justify-center'>
            <h1 className='lg:text-8xl text-6xl  absolute -top-6 lg:-top-14 text-hora font-cursive'>Services</h1>
            <h1 className='lg:text-4xl text-4xl font-semibold relative z-10'>Catering Services</h1>
        </div>

      
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full '>
          {cateringServices.map((val, i) => (
            <div 
              key={i} 
              className='flex flex-col items-center justify-center p-6 bg-white  rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer'
            >
              <div className='text-5xl text-hora'>{val.icon}</div>
              <div className='text-2xl font-semibold mt-4 text-center'>{val.title}</div>
              <div className='text-lg text-gray-500 mt-4 text-center'>{val.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
