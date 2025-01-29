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
        <div className="h-screen flex flex-col items-center justify-center bg-green-200">
           <div className='flex flex-col gap-4'>
           <h2 className="top-[-60px] text-4xl font-bold   text-center">Testimony</h2>
           <h3 className="relative z-10 text-3xl font-semibold text-center">Happy Customer</h3>
           </div>

            <div className="w-3/4 h-2/3  flex items-center justify-center">
                <Carousel className=''
                    infiniteLoop
                    showArrows={false}
                    showStatus={false}
                    centerMode
                    centerSlidePercentage={33.33}
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
