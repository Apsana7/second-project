import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
   
  return (
    <div>       
        <div className=' relative w-full h-[500px] object-cover' >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-8xl  font-cursive text-white mb-4">Menu</h1>
            <Link  to={"/"} className="text-2xl underline">Home</Link>
            
        </div>
      </div>
      </div> 
 
  )
}

export default Banner
