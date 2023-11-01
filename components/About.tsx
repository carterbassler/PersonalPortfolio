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
            I am a fourth-year Computer Science student at the University of Virginia.  Over the past three summers I’ve had cool software engineering internships at two financial institutions. In the summer of 2021 and 2022, I interned at Fermat Capital, an alternative investment manager specializing in insurance-linked strategies. Last summer I interned at Bank of New York Mellon where I worked on their Wealth Management team to develop a microfrontend for one of their internal tools. At the University of Virginia I’m part of the nationally recognized Alpha Kappa Psi Professional Fraternity. I have a wide range of technical skills and passions and currently I’m working on my latest passion project Imperium: a workout tracking mobile app where you can share your workouts with others and keep each other accountable, inspiring a sense of community within the fitness world. If any of what I said sounds cool, feel free to reach out!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About