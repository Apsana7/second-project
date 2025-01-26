import React from 'react'
import { MdOutlineMessage } from "react-icons/md";

function RecentBlogs() {
    const images = [
        {
           image: "coffee.jpg",
           date:"Sept 6, 2019 Admin",
           Title:"Taste the delicious foods in Asia",
           Button:"Read more"
        },
        {
            image:"coffee2.jpg",
            date:"Sept 6, 2019 Admin",
            Title:"Taste the delicious foods in Asia",
            Button:"Read more"
        },
        {
             image:"coffee3.jpg",
             date:"Sept 6, 2019 Admin",
             Title:"Taste the delicious foods in Asia",
             Button:"Read more"
        }
    ]
  return (
    <div className='flex flex-col gap-10 bg-white items-center justify-center h-lvh'>
      <div className='text-5xl font-bold '>Recent Posts</div>
      <div className='grid grid-cols-3  gap-4 w-3/4 mx-auto'>
        {
            images.map((val,i)=>{
                return(
                    <div key={i} className='flex flex-col gap-4'>
                         <img src={val.image} className='w-full h-80 object-cover'>
                         </img>
                         <div className='text-sm text-gray-500'>{val.date}</div>
                         <div className='text-2xl font-bold'>{val.Title}</div>
                         <div className='flex justify-between items-center'>{val.Button}<span className='text-gray-400'><MdOutlineMessage /></span></div>
                    </div>
                   
                )
            })
        }
      </div>

    </div>
  )
}

export default RecentBlogs
