import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase
        text-gray-500 text-2xl justify-center'>
        About
        </h3>

        <motion.img
        src="https://media.licdn.com/dms/image/C5603AQFft3QevGb1Ew/profile-displayphoto-shrink_400_400/0/1609867797275?e=1676505600&v=beta&t=xvze5-Qk6ZnjXLu00n78lPQRO6P-grocgbcLUzzIVgs"
        className='-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl md:text-3xl font-semibold'>
            Here is a {" "}<span className='strong'>little</span>{" "} bit about me
            </h4>
            <p className='text-base'>
            I am currently a third year student at the University of Virginia studying 
            {" "}<a className='animated'>Computer Science</a>. The past two summers I’ve interned at 
            {" "}<a className='animated'>Fermat Capital Management</a>, an alternative investment 
            manager that specializes in insurance linked strategies. At school I’m a member of UVA’s 
            chapter of the professional fraternity 
            {" "}<a className='animated'>Alpha Kappa Psi</a>. I’m experienced with Java, Python, 
            C++, and am currently learning web development. Check out some of my 
            {" "}<a className='animated'>social media</a> and feel free to reach out!
            </p>
            {/* <p className='text-xs'>
            I am currently a third year student at the University of Virginia studying Computer Science.
            I also have been taking courses in music and commerce to explore other disciplines in particularly
            interested in. The past two summers I’ve interned at Fermat Capital Management, an alternative investment 
            manager that specializes in insurance linked strategies. At school I’m a member of UVA’s 
            chapter of the professional fraternity Alpha Kappa Psi. I’m experienced with Java, Python, 
            C++, and am currently learning web development. I also love playing soccer and tennis and 
            am an avid Aston Villa fan. Feel free to check out my social media, mainly my spotify profile.
            I have an wide array of different playlists and music tastes. Thanks for reading a bit about me!
            </p> */}
        </div>
    </motion.div>
  )
}

export default About