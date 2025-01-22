import React from 'react'

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
        <div className='fixed w-screen z-10 border-b text-white border-gray-700 flex items-center justify-center h-28 py-8'>
            <div className='w-3/4 flex  items-center justify-between'>
                <h1 className='text-2xl font-bold '>Feliciano</h1>
                <div className='flex gap-10'>
                    {
                        Page.map((val, i) => {
                            return (
                                <div key={i}>
                                    <button className={`py-3 ${i===5?"bg-orange-300 py-3 px-4 rounded-lg":""}`}>
                                        {val.title}
                                    </button>
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
