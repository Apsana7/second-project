// import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
    const images = [
        { image: 'coffee.jpg' },
        { image: 'coffee3.jpg' },
        { image: 'coffee4.jpg' },
    ];

    const foodItems = [
        {
            foodPic: 'fooditem1.jpg',
            Title: 'Grilled Beef with Potatoes',
            subTitle: 'Meat, Potatoes, Rice, Tomato'
        },
        {
            foodPic: 'fooditem2.jpg',
            Title: 'Grilled Beef with Potatoes',
            subTitle: 'Meat, Potatoes, Rice, Tomato'
        },
        {
            foodPic: 'fooditem3.jpg',
            Title: 'Grilled Beef with Potatoes',
            subTitle: 'Meat, Potatoes, Rice, Tomato'
        },
        {
            foodPic: 'fooditem4.jpg',
            Title: 'Grilled Beef with Potatoes',
            subTitle: 'Meat, Potatoes, Rice, Tomato'
        }
    ];

    return (
        <div className='relative'> 

            <div className="relative h-screen w-full mx-auto">
                <Carousel
                    autoPlay
                    interval={3000}
                    showStatus={false}
                    infiniteLoop
                    showThumbs={false}
                    renderIndicator={false}
                >
                    {
                        images.map((val, index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <img src={val.image} alt='xaina bak' className='w-screen h-screen object-cover' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Feliciano</h1>
                    <h2 className="text-3xl">BEST RESTAURANT</h2>
                </div>
            </div>

            <div className='absolute bottom-0 w-full px-12 border-t border-gray-600 py-10   object-cover'>
                <div className='flex justify-between'>
                    {foodItems.map((val, i) => (
                        <div key={i} className='text-center'>
                            <img
                                src={val.foodPic}
                                alt={val.Title}
                                className='w-28 h-28 rounded-full mx-auto object-cover'
                            />
                            <h3 className='font-bold text-lg  text-white mt-4'>{val.Title}</h3>
                            <p className='text-gray-200'>{val.subTitle}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Banner;


