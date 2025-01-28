import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa"; 

function Chef() {
    const ChefsDetails = [
        {
            Image:"Person5.jpg",
            Name:"John Smooth",
            Post:"Restaurant Owner",  
        },
        {
            Image:"Person2.jpg",
            Name:"Rebeca Welson",
            Post:"Head Chef"
        },
        {
            Image:"Person6.jpg",
            Name:"Kharl Branyt",
            Post:"Chef"
        },
        {
            Image:"Person3.jpg",
            Name:"Luke Simon",
            Post:"Chef"
        }
    ] 
  return (
    <div className='h-lvh flex flex-col gap-10 bg-white items-center justify-center'>
        <h1 className='font-semibold text-5xl text-orange-600'>Chef</h1>
        <h2 className='font-bold text-4xl'>Our Master Chefs</h2>
      <div className='grid grid-cols-4 gap-4 w-3/4 '>
        {
            ChefsDetails.map((val,i)=>{
                return(
                    <div key={i}>
                        <div>
                            <img src={val.Image} alt="" className='w-full h-80 object-cover' />
                            <div className='font-semibold text-lg mt-4'>{val.Name}</div>
                            <div className='text-gray-500 mt-2'>{val.Post}</div>
                            <div className='text-lg text-orange-300 flex flex-row gap-2 mt-4'>
                                <div><FaTwitter /></div>
                                <div><FaFacebook /></div>
                                <div><FaGooglePlusG /></div>
                                <div><FaInstagramSquare /></div>
                            </div>
                        </div>
                    </div>
                )
            })
        }   
     </div>
    </div>
  )
}

export default Chef
