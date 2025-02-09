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
    <div className="flex flex-col bg-gray-100 items-center justify-center h-auto py-16">
   
      <div className="relative flex flex-col items-center justify-center mt-8">
       
        <h1 className="absolute text-8xl text-hora font-cursive top-[-60px] sm:text-6xl md:text-7xl">
          Blog
        </h1>
        
        <h2 className="relative text-5xl font-bold text-black z-10 sm:text-4xl md:text-5xl">
          Recent Posts
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8 w-11/12 md:w-3/4 mx-auto">
        {images.map((val, i) => {
          return (
            <div key={i} className="flex flex-col gap-4 hover:bg-white cursor-pointer group transition-all duration-700 delay-75 ease-in-out p-4 hover:shadow-lg hover:rounded-lg">
              <div className='h-80 overflow-clip w-full rounded-lg'>
                <img 
                  src={val.image} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:rotate-3 delay-75 group-hover:scale-110" 
                  alt="Blog Thumbnail" 
                />
              </div>
              <div className="text-sm text-gray-500">{val.date}</div>
              <div className="text-2xl font-bold sm:text-xl md:text-2xl">{val.Title}</div>
              <button className="flex justify-between items-center hover:text-red-600 text-sm sm:text-base">
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

