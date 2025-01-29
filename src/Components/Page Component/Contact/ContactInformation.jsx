import React from 'react'

function ContactInformation() {
  return (
    <div className='h-80 bg-white flex flex-col gap-6 items-center justify-center '>
    <h1 className='text-xl font-semibold '>Contact information</h1>
    <div className='grid grid-cols-4 text-lg w-10/12'>
        <div>Address: 198 West 21th Street,</div>
        <div>Phone: <span className='text-hora'>+ 1235 2355 98</span></div>
        <div>Email: <span className='text-hora'>info@yoursite.com</span></div>
        <div>Website <span className='text-hora'>yoursite.com</span></div>
        <div>Suite 721 New York NY 10016</div>
        </div>
    </div>
  )
}

export default ContactInformation
