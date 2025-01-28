import React from 'react'
import Testimony from '../Components/Page Component/About/Testimony'
import Reservation from '../Components/Page Component/About/Reservation'
import Chef from '../Components/Page Component/About/Chef'
import Services from '../Components/Page Component/About/Services'
import Banner from '../Components/Page Component/About/Banner'
import AboutResturant from '../Components/Page Component/About/AboutResturant'


function About() {
  return (
    <div>
      <Banner/>
      <AboutResturant/>
      <Services />
      <Chef />
      <Reservation />
      <Testimony />

    </div>
  )
}

export default About
