import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function AboutResturant() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className='lg:h-auto w-fit bg-white flex items-center justify-center gap-8 py-16'>
      <div className='flex flex-col  items-center justify-center w-11/12 lg:w-3/5 '>

        <div className='flex flex-col lg:flex-row gap-12 lg:gap-0  w-full relative'>
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 w-full lg:h-96'>
            <img src="Person3.jpg" alt="" className='lg:absolute h-96 lg:w-64 w-full object-cover z-10 lg:my-8 lg:mx-64 drop-shadow-xl' />
            <img src="Person5.jpg" alt="" className='relative h-96 lg:h-full object-cover w-full lg:w-60 drop-shadow-xl' />
          </div>

          <div className='flex flex-col gap-8   text-black lg:w-96 px-2  mx-auto lg:absolute lg:right-0 lg:top-1/2 transform lg:-translate-y-1/2'>
            <div className='relative mt-4 lg:mt-0'>
              <h1 className='absolute -top-14 font-cursive text-8xl text-hora'>about</h1>
              <h1 className='text-4xl relative z-10 font-semibold'>Feliciano</h1>
              <h1 className='text-lg font-semibold'>Restaurant</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-sm'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <div className='text-sm text-hora'>Mon-Fri <span className='font-semibold'>8 AM - 11 PM</span></div>
              <div className='font-bold text-3xl w-full flex items-center justify-center lg:justify-start  text-hora'>+1-978-123-4567</div>
            </div>
          </div>
        </div>

       
        <div className='flex flex-col items-center text-center lg:grid lg:grid-cols-5 mt-12 gap-6'>
          <div>
            {inView && <CountUp start={0} duration={5} end={18} className='text-3xl font-bold text-hora' />}
            <div className='text-sm font-thin text-gray-500'>YEARS OF EXPERIENCE</div>
          </div>
          <div>
            {inView && <CountUp start={0} end={100} className='text-3xl font-bold text-hora' />}
            <div className='text-sm font-thin text-gray-500'>MENUS/DISH</div>
          </div>
          <div>
            {inView && <CountUp start={0} end={50} className='text-3xl font-bold text-hora' />}
            <div className='text-sm font-thin text-gray-500'>STAFFS</div>
          </div>
          <div>
            {inView && <CountUp start={0} end={15000} className='text-3xl font-bold text-hora' />}
            <div className='text-sm font-thin text-gray-500'>HAPPY CUSTOMERS</div>
          </div>
          <div className='text-sm text-gray-600 w-11/12 lg:w-auto'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
        </div>
      </div>
    </div>
  );
}

export default AboutResturant;

