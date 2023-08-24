import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({ }: Props) {
  return (
    <div className='flex items-center w-full h-screen'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col text-center md:text-left px-10'>
        <h3 className='top-24 uppercase
        text-gray-500 text-2xl text-center pb-10 md:p-0'>
          About
        </h3>
        <div className='flex flex-col md:flex-row justify-evenly text-center md:text-left items-center mx-auto md:p-10'>

          <motion.img
            src="https://avatars.githubusercontent.com/u/54248223?v=4"
            className='md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'
          />

          <div className='space-y-1 px-0 md:px-10'>
            <h4 className='text-xl md:text-3xl font-semibold py-10 md:py-10'>
              Here is a {" "}<span className='strong'>little</span>{" "} bit about me
            </h4>
            <p className='text-base'>
            I am a fourth-year Computer Science student at the University of Virginia. 
            Over the past three summers, I've interned at institutions including Fermat Capital 
            Management, an alternative investment manager specializing in insurance-linked strategies, 
            and most recently at BNY Mellon. At BNY Mellon, I developed a microfrontend for the Wealth 
            Desktop Platform using Angular, contributing to enhanced user interface and experience. At 
            UVA, I am proud to be a part of the Alpha Kappa Psi professional fraternity. My technical 
            strengths include Java, Python, and C++. Lately, I've delved into mobile development and have 
            celebrated the recent launch of my first app on the iOS App Store. Please don't hesitate to connect!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About