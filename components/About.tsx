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
              I am currently a fourth year student at the University of Virginia studying
              Computer Science. The past two summers I’ve interned at
              Fermat Capital Management, an alternative investment
              manager that specializes in insurance linked strategies. At school I’m a member of UVA’s
              chapter of the professional fraternity
              Alpha Kappa Psi. I’m experienced with Java, Python,
              C++, and am currently learning mobile development. I just published my first app on the ios app store! Check out some of my
              social media and feel free to reach out!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About