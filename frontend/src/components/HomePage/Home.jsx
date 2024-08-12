/* eslint-disable no-unused-vars */
import React from 'react'
import Welcome from './Welcome'
import PopJourn from './PopJourn'
// import About from './About'
import Footer from '../Footer'
const Home = () => {
  return (
    <div className=''>
      <div className=''>
        <Welcome />
        {/* <About/> */}
        <PopJourn/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home