import React from 'react';

function Menu() {
  const menuItems = [
    { image: 'fooditem1.jpg', title: 'Grilled Beef with Potatoes', price: '$29', description: 'Meat, Potatoes, Rice, Tomato' },
    { image: 'fooditem2.jpg', title: 'Grilled Beef with Potatoes', price: '$29', description: 'Meat, Potatoes, Rice, Tomato' },
    { image: 'fooditem3.jpg', title: 'Grilled Beef with Potatoes', price: '$29', description: 'Meat, Potatoes, Rice, Tomato' },
    { image: 'fooditem4.jpg', title: 'Grilled Beef with Potatoes', price: '$29', description: 'Meat, Potatoes, Rice, Tomato' },
    { image: 'coffee.jpg', title: 'Grilled Beef with Potatoes', price: '$29', description: 'Meat, Potatoes, Rice, Tomato' },
    { image: 'coffee6.jpg', title: 'Grilled Beef with Potatoes', price: '$29', description: 'Meat, Potatoes, Rice, Tomato' }
  ];

  return (
    <div className="flex flex-col items-center py-12 bg-white">
      <h1 className="text-5xl font-bold text-gray-800 text-center">
        <span className="text-gold italic">Specialties</span>{' '}
        <span className="text-black font-extrabold">Our Menu</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 md:w-10/12 mt-8">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-gold">{item.price}</span>
                <button className="bg-gold text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
                  Order now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
