// import React from 'react'
// import { MdOutlineMessage } from "react-icons/md";

// function RecentBlogs() {
//     const images = [
//         {
//            image: "fooditem4.jpg",
//            date:"Sept 6, 2019 Admin",
//            Title:"Taste the delicious foods in Asia",
//            Button:"Read more"
//         },
//         {
//             image:"fooditem2.jpg",
//             date:"Sept 6, 2019 Admin",
//             Title:"Taste the delicious foods in Asia",
//             Button:"Read more"
//         },
//         {
//              image:"fooditem3.jpg",
//              date:"Sept 6, 2019 Admin",
//              Title:"Taste the delicious foods in Asia",
//              Button:"Read more"
//         }
//     ]
//   return (
//     <div className='flex flex-col  bg-white  items-center justify-center h-lvh'>
//       <h1 className='relative text-7xl text-hora bg-green-200 font-cursive font-semibold'>Blogs</h1>
//       <div className='absolute z-10  bg-red-300 text-5xl font-bold '>Recent Posts</div>
//       <div className='grid grid-cols-3 mt-8  gap-8 w-10/12 mx-auto'>
//         {
//             images.map((val,i)=>{
//                 return(
//                     <div key={i} className='flex flex-col gap-4'>
//                          <img src={val.image} className='w-full h-80 object-cover'>
//                          </img>
//                          <div className='text-sm text-gray-500'>{val.date}</div>
//                          <div className='text-2xl font-bold'>{val.Title}</div>
//                          <button className='flex justify-between items-center hover:text-red-600'>{val.Button}<span className='text-gray-400'><MdOutlineMessage /></span></button>
//                     </div>
                   
//                 )
//             })
//         }
//       </div>

//     </div>
//   )
// }

// export default RecentBlogs
import React from 'react';
import { MdOutlineMessage } from 'react-icons/md';

function RecentBlogs() {
  const images = [
    {
      image: 'fooditem4.jpg',
      date: 'Sept 6, 2019 Admin',
      Title: 'Taste the delicious foods in Asia',
      Button: 'Read more',
    },
    {
      image: 'fooditem2.jpg',
      date: 'Sept 6, 2019 Admin',
      Title: 'Taste the delicious foods in Asia',
      Button: 'Read more',
    },
    {
      image: 'fooditem3.jpg',
      date: 'Sept 6, 2019 Admin',
      Title: 'Taste the delicious foods in Asia',
      Button: 'Read more',
    },
  ];

  return (
    <div className="flex flex-col bg-white items-center justify-center h-lvh">
   
      <div className="relative flex flex-col items-center justify-center mt-8">
       
        <h1 className="absolute text-8xl text-hora font-cursive font-semibold top-[-60px]">
          Blog
        </h1>
        
        <h2 className="relative text-5xl font-bold text-black z-10">
          Recent Posts
        </h2>
      </div>

      <div className="grid grid-cols-3 mt-8 gap-8 w-10/12 mx-auto">
        {images.map((val, i) => {
          return (
            <div key={i} className="flex flex-col gap-4 bg-white p-4 shadow-lg rounded-lg">
              <img src={val.image} className="w-full h-80 object-cover rounded-lg" alt="Blog Thumbnail" />
              <div className="text-sm text-gray-500">{val.date}</div>
              <div className="text-2xl font-bold">{val.Title}</div>
              <button className="flex justify-between items-center hover:text-red-600">
                {val.Button}
                <span className="text-gray-400 ml-2">
                  <MdOutlineMessage />
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentBlogs;
