import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clickMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const Page = [
        { 
        title: "Home", 
        path: "/" 
        },
        { 
        title: "About", 
        path: "/About" 
        },
        {
        title: "Menu", 
        path: "/Menu" 
        },
        {
        title: "Stories", 
        path: "/Stories" 
        },
        { 
        title: "Contact", 
        path: "/Contact" 
        },
        { 
        title: "BookATable", 
        path: "/BookATable" 
        },
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
        <div className={`w-full z-10 border-b text-white border-gray-700 flex items-center justify-center h-16 py-4 transition-all duration-300 ${isFixed ? "fixed top-0 left-0 border-none bg-hora shadow-lg" : "relative"}`}>
            <div className="flex w-11/12 lg:w-3/4 justify-between">
          
                <div className="text-2xl text-white font-bold">Feliciano</div>

              
                <div className="flex text-3xl md:hidden cursor-pointer" onClick={clickMenu}>
                    <IoMenu />
                </div>

               
                <div className="md:flex gap-10 hidden">
                    {Page.map((val, i) => (
                        <div key={i}>
                            <Link to={val.path} className="text-white hover:text-orange-600">
                                {val.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

         
            {isMenuOpen && (
                <div className="absolute top-16  w-6/12 right-0  flex  text-center bg-black  transition-all  duration-300">
                    <div className="flex flex-col items-center w-full gap-4 py-4 text-white">
                        {Page.map((val, i) => (
                            <div key={i} className="w-full text-center py-2 border-b border-gray-700">
                                <Link to={val.path} className="w-full py-2 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                                    {val.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
