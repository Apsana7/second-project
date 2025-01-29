import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
    const [isFixed, setIsFixed] = useState(false);

    const Page = [
        { title: "Home" },
        { title: "About" },
        { title: "Menu" },
        { title: "Stories" },
        { title: "Contact" },
        { title: "BookATable" },
    ];

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-full z-10 border-b text-white border-gray-700 flex items-center justify-center h-16 py-4 transition-all duration-300 ${isFixed ? 'fixed top-0 left-0 bg-hora shadow-lg' : 'relative'}`}>
            <div className='flex w-3/4 justify-between'>
                <div className='text-2xl text-white font-bold'>Feliciano</div>

                <div className='flex md:hidden'>
                    <span>☰</span>
                </div>

                <div className='md:flex gap-10 hidden'>
                    {Page.map((val, i) => {
                        const paths = ["/", "/about", "/menu", "/stories", "/contact", "/BookATable"];
                        return (
                            <div key={i}>
                                <Link
                                    to={paths[i]}
                                    className={`py-3 ${i === 5 ? "bg-hora py-3 px-4 rounded-lg hover:bg-red-500" : "hover:text-gray-400"}`}
                                >
                                    {val.title}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Header;
