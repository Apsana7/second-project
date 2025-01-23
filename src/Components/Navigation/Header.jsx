import React from 'react'
import { Link } from "react-router-dom"

function Header() {
    const Page = [
        {
            title: "Home"
        },
        {
            title: "About"
        },
        {
            title: "Menu"
        },
        {
            title: "Stories"
        },
        {
            title: "Contact"
        },
        {
            title: "Book a table"
        },

    ]
    return (
        <div className='    w-full z-10 border-b text-white border-gray-700 flex items-center justify-center h-20 py-8'>
            <div className=' flex  w-3/4 justify-between'>
                <div className='text-2xl text-black font-bold '>Feliciano</div>
                <div className='flex gap-10'>
                    {
                        Page.map((val, i) => {
                            const paths = ["/", "/about", "/menu", "/stories", "/contact", "/book-a-table"];
                            return (
                                <div key={i}>
                                    {/* <Link to="/" className={`py-3 ${i===5?"bg-orange-300 py-3 px-4 rounded-lg hover:bg-red-500":""}`}>
                                        {val.title}
                                    </Link> */}
                                    <Link
                                        to={paths[i]}
                                        className={`py-3 ${i === 5 ? "bg-orange-300 py-3 px-4 rounded-lg hover:bg-red-500" : ""}`}
                                    >
                                        {val.title}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
