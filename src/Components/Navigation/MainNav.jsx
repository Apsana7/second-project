import React from 'react'
import SubHeader from './SubHeader'
import Header from './Header'

function MainNav() {
  return (
    <div className='absolute z-50 left-0 right-0 top-0'>
      <SubHeader/>
      <Header/>
    </div>
  )
}

export default MainNav
