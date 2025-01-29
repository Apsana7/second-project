import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa"; 

function Chefs() {
    const ChefsDetails = [
        {
            Image:"chef111.jpg",
            Name:"John Smooth",
            Post:"Restaurant Owner",  
        },
        {
            Image:"chef2.jpg",
            Name:"Rebeca Welson",
            Post:"Head Chef"
        },
        {
            Image:"chef3.jpg",
            Name:"Kharl Branyt",
            Post:"Chef"
        },
        {
            Image:"chef44.jpg",
            Name:"Luke Simon",
            Post:"Chef"
        }
    ] 
  return (
    <div className='h-lvh flex flex-col gap-10  bg-white items-center justify-center'>
        <h1 className='absolute font-bold text-4xl text-orange-500 font-cursive -mt-96 tracking-wide'>Meet Our Chefs</h1>
        <h2 className='relative z-10 mt-14 font-bold text-3xl text-gray-800'>Our Master Chefs</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-10/12 mt-8'>
        {
            ChefsDetails.map((val,i)=>{
                return(
                    <div key={i} className='bg-whiterounded-lg overflow-hidden'>
                        <img src={val.Image} alt={val.Name} className='w-full h-80 object-cover transition-transform duration-300 hover:scale-105' />
                        <div className='font-semibold text-lg mt-4 text-center'>{val.Name}</div>
                        <div className='text-gray-500 mt-2 text-center'>{val.Post}</div>
                        <div className='text-lg text-orange-500 flex justify-center gap-4 mt-4'>
                            <FaTwitter />
                            <FaFacebook />
                            <FaGooglePlusG />
                            <FaInstagramSquare />
                        </div>
                    </div>
                )
            })
        }   
     </div>
    </div>
  )
}

export default Chefs