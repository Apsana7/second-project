import React from 'react'
import CountUp from 'react-countup';

function AboutResturant() {
  return (
    <div className='h-lvh bg-white flex items-center justify-center gap-8 '>
      <div className=' flex flex-col  items-center justify-center w-3/5 mx-auto'>

        <div className='flex w-full '>
          <div className='flex  w-full h-96 '>
            <img src="Person3.jpg" alt="" className='absolute h-96 w-64 object-cover z-10 my-8 mx-64 drop-shadow-xl'/>
            <img src="Person5.jpg" alt="" className='relative drop-shadow-xl' />
          </div>

          <div className='flex flex-col gap-1 w-3/4 '>
            <h1 className='font-cursive text-8xl text-hora font-bold'>about</h1>
            <h1 className='text-4xl font-semibold'>Feliciano</h1>
            <h1>Restaurant</h1>
           <div className='flex flex-col gap-4'>
           <p className='text-sm text-gray-400'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div className='text-sm text-gray-500'>Mon-Fri <span className='font-semibold text-gray-600'>8 AM - 11 PM</span></div>
            <div className='font-bold text-3xl text-hora'>+1-978-123-4567</div>
           </div>
          </div>
        </div>



        <div className='grid grid-cols-5 py-12'>
          <div>
            <CountUp start={0} duration={5} end={18} className='text-3xl font-bold text-hora' />
            <div className='text-sm font-thin text-gray-500'>YEARS OF EXPERIENCES</div>
          </div>

          <div>
            <CountUp start={0} end={100} className='text-3xl font-bold text-hora' />
            <div className='text-sm font-thin text-gray-500'>MENUS/DISH</div>
          </div>

          <div>
            <CountUp start={0} end={50} className='text-3xl font-bold text-hora' />
            <div className='text-sm font-thin text-gray-500'>STAFFS</div>
          </div>

          <div>
            <CountUp start={0} end={15000} className='text-3xl font-bold text-hora'/>
            <div className='text-sm font-thin text-gray-500'>HAPPY CUSTOMERS</div>
          </div>

          <div className='text-sm text-gray-600'>A small river named Duden flows by their place and supplies it with the necessary regelialia. </div>
        </div>

      </div>
    </div>

  )
}

export default AboutResturant
