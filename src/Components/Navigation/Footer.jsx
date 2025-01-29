import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";


function Footer() {
    const openHours = [
        {
            day: 'Monday',
            hours: '9:00 - 24:00'
        },
        {
            day: 'Tuesday',
            hours: '9:00 - 24:00'
        },
        {
            day: 'Wednesday',
            hours: '9:00 - 24:00'
        },
        {
            day: 'Thursday',
            hours: '9:00 - 24:00'
        },
        {
            day: 'Friday',
            hours: '9:00 - 02:00'
        },
        {
            day: 'Saturday',
            hours: '9:00 - 02:00'
        },
        {
            day: 'Sunday',
            hours: '9:00 - 02:00'
        },
    ];

    const instagramImages = [
        'coffee.jpg',
        'coffee4.jpg',
        'fooditem1.jpg',
        'fooditem2.jpg',
        'fooditem3.jpg',
        'fooditem4.jpg',
    ];

    return (
        <footer className="bg-black text-white py-10 h-[500px]   flex flex-col items-center justify-center">
            <div className="w-10/12 mx-auto flex flex-row justify-between  gap-20 py-4">
                {/* Column 1 */}
                <div>
                    <h2 className="font-bold text-xl mb-8">Feliciano</h2>
                    <p className="text-gray-400 mb-4 w-56">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <div className='flex flex-row gap-4 text-2xl'>
                        <div><FaTwitter /></div>
                        <div><BsFacebook /></div>
                        <div><FaSquareInstagram /></div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className='w-[300px]'>
                    <h2 className='font-bold text-xl mb-8'>Open hours</h2>
                    <ul>
                        {
                            openHours.map((val, i) => (
                                <li key={i}>
                                    <div className='grid grid-cols-2 '>
                                        <div>{val.day}</div>

                                        <div>{val.hours}</div>
                                    </div>

                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Column 3 */}
                <div>
                    <h2 className="font-bold text-xl mb-8">Instagram</h2>
                    <div className="grid grid-cols-3 gap-1">
                        {instagramImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Instagram ${index + 1}`}
                                className="w-full h-20 object-cover"
                            />
                        ))}
                    </div>
                </div>

                {/* Column 4 */}
                <div>
                    <h2 className="font-bold text-xl mb-8">Newsletter</h2>
                    <p className="text-gray-400 mb-4">
                        Far far away, behind the word mountains, far from the countries.
                    </p>
                    <form className="flex flex-col">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="p-2 mb-4 bg-gray-800 border border-gray-600 rounded text-gray-200 "
                        />
                        <button className="bg-hora text-white py-2 px-4 rounded hover:bg-orange-600">
                            Subscribe
                        </button>
                    </form>
                </div>



            </div>

            <div className="text-center mt-16 px-12 py-10 w-full text-gray-400 text-sm border-t border-gray-600">
                Copyright ©2025 All rights reserved | This template is made with{" "}
                <span className="text-red-500">♥</span> by Colorlib
            </div>
        </footer>
    );
}

export default Footer;
