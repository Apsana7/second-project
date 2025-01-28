import React from 'react'
import {Link} from 'react-router-dom'

function Banner() {
   
  return (
    <div>
      
        <div className=' relative w-full h-[500px] object-cover ' >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About</h1>
            <Link  to={"/"} className="text-2xl">Home</Link>
        </div>
      </div>
      </div> 
 
  )
}

export default Banner
