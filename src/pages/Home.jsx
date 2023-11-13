import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Join from '../components/Join/Join'
import Counter from '../components/Counter/Counter'
import Activity from '../components/Activity/Activity'
import X from '../components/X/X'
import Extreme from '../components/Extreme/Extreme'
import Choose from '../components/Choose/Choose'
import Share from '../components/Share/Share'
import Sponsor from '../components/Sponsor/Sponsor'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar className='absolute z-10 w-full'/>
      <Banner className='relative'/>
      <Join/>
      <Counter/>
      <Activity/>
      <X/>
      <Extreme/>
      <Choose/>
      <Share/>
      <Sponsor/>
      <Footer/>
    </>
  )
}

export default Home