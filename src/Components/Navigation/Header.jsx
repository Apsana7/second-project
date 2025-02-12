import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const clickMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        setIsFixed(window.scrollY > 100);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const Page = [
        { title: "Home", path: "/" },
        { title: "About", path: "/About" },
        { title: "Menu", path: "/Menu" },
        { title: "Stories", path: "/Stories" },
        { title: "Contact", path: "/Contact" },
        { title: "Book A Table", path: "/BookATable" },
    ];

    return (
        <div className={`w-full z-10 border-b text-white border-gray-700 flex items-center justify-center h-16 py-4 transition-all duration-300 ${isFixed ? "fixed top-0 left-0 bg-hora shadow-lg" : "relative"}`}>
            <div className="flex w-11/12 lg:w-3/4 justify-between">
                <div className="text-2xl text-white font-bold">Feliciano</div>
                
                <div className="flex text-3xl md:hidden cursor-pointer" onClick={clickMenu}>
                    <IoMenu />
                </div>
                
                <div className="md:flex gap-10 hidden">
                    {Page.map((val, i) => (
                        <Link 
                            key={i} 
                            to={val.path} 
                            className="text-white hover:text-orange-600"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            {val.title}
                        </Link>
                    ))}
                </div>
            </div>
            
            <div 
                ref={menuRef} 
                className={`absolute top-16 right-0 w-64 bg-black rounded-md shadow-lg transition-transform duration-300 ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"}`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <span className="text-white text-lg font-semibold">Menu</span>
                    <div className="text-white text-2xl cursor-pointer" onClick={closeMenu} ></div>
                </div>
                <div className="flex flex-col items-start w-full py-2 text-white">
                    {Page.map((val, i) => (
                        <Link 
                            key={i} 
                            to={val.path} 
                            className="w-full block px-6 py-3 hover:bg-gray-800" 
                            onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
                        >
                            {val.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;

