import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function Banner() {
    const images = [
        {
            image: 'coffee.jpg'
        },
        {
            image: 'coffee2.jpg'
        },
        {
            image: 'coffee3.jpg'
        },
        {
            image: 'coffee4.jpg'
        }

    ]

    return (
        <div>
            <div className='relative h-lvh w-full mx-auto'>
                {/* <Carousel autoPlay
                    interval={3000}
                    showStatus={false}
                    infiniteLoop
                    showThumbs={false}
                    renderIndicator={false}
                    onChange={(index) => setImage(index)
                    }> */}
                    {
                        images.map((val, index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <img src={val.image} alt='xaina bak' className='w-screen h-full' />
                                    </div>
                                </div>
                            )
                        })
                    }
                {/* </Carousel> */}
            </div>
        </div>
    )
}

export default Banner
