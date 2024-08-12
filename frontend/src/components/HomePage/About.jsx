/* eslint-disable no-unused-vars */
import React from 'react'
import logoImg from '../../assets/image.png';

const About = () => {
  return (
    <div>
      <section id='about' className='mt-10'> {/* Reduced margin-top */}
        <div className='text-center'>
          <div className='w-[78rem] flex flex-col items-center mb-6 rounded-xl py-6 shadow-b-xl border-l-4'> {/* Adjusted padding */}
            <div className='mb-[2rem]'>
              <span className='text-4xl py-2 px-4 bg-red-400 rounded-xl shadow-xl'>About Us</span>
            </div>
            <div className='w-[20rem] mb-[2rem]'>
              <img src={logoImg} alt='JournalProbe Logo' className='w-full h-auto'/>
            </div>
            <div className='text-xl w-[60%] text-justify py-6 px-[2rem]'> {/* Adjusted padding */}
              Welcome to JournalProbe, your go-to destination for all things culinary. We are passionate food enthusiasts dedicated to bringing you the best in food journalism. Our mission is to explore the diverse and rich world of gastronomy, from the latest food trends and recipes to in-depth features on culinary cultures around the globe.
              <br /><br />
              At JournalProbe, we believe that food is more than just sustenance; it is a medium that brings people together, tells stories, and reflects our shared heritage. Our team of experienced writers, chefs, and food critics work tirelessly to provide you with engaging content that inspires and educates.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
