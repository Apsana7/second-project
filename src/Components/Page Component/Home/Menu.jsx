import React from 'react';

const Menu = () => {
  const images = [
    {
      image: "fooditem1.jpg",
      title: "Grilled Beef with potatoes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
    {
      image: "fooditem2.jpg",
      title: "Grilled Beef with potatoes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
    {
      image: "fooditem3.jpg",
      title: "Grilled Beef with potatoes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
    {
      image: "fooditem4.jpg",
      title: "Baked New Zealand Mussels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
    {
      image: "fooditem5.jpg",
      title: "Baked New Zealand Mussels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
    {
      image: "fooditem6.jpg",
      title: "Baked New Zealand Mussels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
    {
      image: "fooditem7.jpg",
      title: "Baked New Zealand Mussels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
    {
      image: "fooditem8.jpg",
      title: "Baked New Zealand Mussels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    }
  ];

  return (
    <div className='h-fit lg:min-h-screen flex flex-col justify-center items-center py-16 p-8'>
     
      <div className=' w-full relative flex flex-col items-center justify-center'>
        <h1 className='text-8xl  absolute -top-14 text-hora font-cursive'>Specialties</h1>
        <h1 className='text-4xl font-semibold relative z-10'>Our Menu</h1>
      </div>

      <div className='grid  lg:p-4  mb-12 sm:grid-cols-3 lg:grid-cols-2 w-11/12 lg:gap-0 gap-10  lg:w-3/4 mx-auto mt-12'>
        {images.map((val, i) => (
          <div key={i} className='group rounded-xl lg:rounded-none  overflow-hidden hover:border-gray-400 transition-all duration-300'>
            <div className={`grid lg:grid-cols-2 gap-10 lg:gap-0    justify-center items-center`}>
            
              <div className={`flex flex-col ${i < 2 || (i > 3 && i < 6) ? "lg:order-first" : "lg:order-last"} justify-center items-start p-4 gap-3`}>
                <div className='text-lg font-serif font-bold'>{val.title}</div>
                <div className='text-gray-400'>{val.description}</div>
                <div className='text-orange-400 text-3xl font-medium'>{val.cost}</div>
              </div>
         
              <div className='h-52 overflow-hidden w-full'>
                <img className='w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110' src={val.image} alt="Menu Item" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
