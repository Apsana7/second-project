// import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
    const images = [
        { image: 'coffee.jpg' },
        { image: 'coffee5.jpg' },
        { image: 'coffee6.jpg' },
        { image: 'coffee4.jpg' }
    ];



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };




















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
                <div className='absolute h-full w-full z-10 bg-gradient-to-r from-gray-950 via-transparent to-black opacity-55  object-cover  top-0 left-0'></div>


                <Carousel
                    responsive={responsive}
                    autoPlay
                    interval={5000}
                    showStatus={false}
                    infiniteLoop
                    showThumbs={false}
                    renderIndicator={false}
                    showArrows={false}
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
                    <h1 className="text-9xl font-medium mb-4 font-cursive text-white">Feliciano</h1>
                    <h2 className="text-3xl">BEST RESTAURANT</h2>
                </div>

            </div>

            <div className='lg:absolute bg-gray-100 lg:bg-transparent bottom-0 w-full px-12 border-t border-gray-900 py-10  text-white object-cover'>
                <div className='lg:flex grid grid-cols-2 justify-between'>
                    {foodItems.map((val, i) => (
                        <div key={i} className='text-center'>
                            <img
                                src={val.foodPic}
                                alt={val.Title}
                                className='w-28 h-28 rounded-full mx-auto object-cover'
                            />
                            <h3 className='font-bold text-lg  mt-4'>{val.Title}</h3>
                            <p className='text-gray-200'>{val.subTitle}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Banner;


