import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Testimony() {
    const personDescription = [
        {
            image: "Person5.jpg",
            description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name: "Jason McClean",
            entity: "CUSTOMER"
        },
        {
            image: "Person4.jpg",
            description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name: "Mark Stevenson",
            entity: "CUSTOMER"
        },
        {
            image: "Person3.jpg",
            description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name: "Art Leonard",
            entity: "CUSTOMER"
        },
    ];

    return (
        <div className="h-screen flex flex-col   items-center justify-center bg-white">
         <div className='w-full relative flex flex-col items-center justify-center'>
    <h1 className='lg:text-8xl text-6xl   font-cursive absolute -top-6 lg:-top-14 text-hora'>Testimony</h1>
    <h1 className='lg:text-4xl  text-4xl font-semibold relative z-10 '>Happy Customer</h1>
    </div>

            <div className="w-3/4 h-2/3  overflow-clip flex items-center justify-center">
                <Carousel className=''
                    autoPlay  
                    interval={3000}  
                    infiniteLoop  
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    centerMode
                    centerSlidePercentage={33.33}
                    stopOnHover={false}
                >

                    {personDescription.map((person, index) => (
                        <div key={index} className="flex flex-col items-center mb-10">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gray-300">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-center w-full text-gray-600 text-lg px-8">
                                {person.description}
                            </p>
                            <h4 className="text-xl font-semibold mt-4">{person.name}</h4>
                            <p className="text-sm text-gray-500">{person.entity}</p>
                        </div>
                    ))}

                </Carousel>
            </div>
        </div>
    );
}

export default Testimony;
