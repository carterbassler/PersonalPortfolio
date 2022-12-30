import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto
    z-20 xl:items-center'>
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center cursor-pointer'>
            <a href=''className='uppercase inline-flex text-sm text-gray-400 px-2 md:px-4'>Home</a>
            <a href='#about' className='uppercase hidden md:inline-flex text-sm text-gray-400 px-4'>About</a>
            <a href='#experience' className='uppercase hidden md:inline-flex text-sm text-gray-400 px-4'>Experience</a>
        </motion.div>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center cursor-pointer'>
            <a href='#projects' className='uppercase hidden md:inline-flex text-sm text-gray-400 px-4'>Projects</a>
            <a href='#music' className='uppercase hidden md:inline-flex text-sm text-gray-400 px-4'>Music</a>
            <a href='#contact' className='uppercase inline-flex text-sm text-gray-400 px-2 md:px-4'>Contact</a>
        </motion.div>
    </header>
  )
}