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
       
        <h1 className="absolute text-8xl text-hora font-cursive top-[-60px]">
          Blog
        </h1>
        
        <h2 className="relative text-5xl font-bold text-black z-10">
          Recent Posts
        </h2>
      </div>

      <div className="grid grid-cols-3 mt-8 gap-8 w-3/4 mx-auto">
        {images.map((val, i) => {
          return (
            <div key={i} className="flex flex-col gap-4 bg-white p-4 shadow-lg rounded-lg">
              <img src={val.image} className="w-full h-80 object-cover rounded-lg transform transition duration-300 hover:scale-105" alt="Blog Thumbnail" />
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
