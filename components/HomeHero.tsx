import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Image from 'next/image'
import ProfilePic from '../images/headshot.jpeg';
import { motion, useMotionValue, useTransform } from 'framer-motion';

type Props = {}

function HomeHero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "UVA Student",
            "Music Enthusiast",
            "Aspiring Trophy Husband"
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='w-full h-screen items-center'>
            <div className='max-w-screen-xl flex flex-col items-center justify-center mx-auto md:flex-row space-y-10'>
                <div className='flex flex-row md:flex-col justify-start items-center h-full md:mx-2'>
                </div>
                <div className='z-10 flex flex-col items-center h-full md:mr-12 md:ml-8'>
                    <div className='text-center md:text-left my-4 md:my-72'>
                        <div>
                            <h2 className='text-6xl md:text-7xl font-bold text-zinc-100'>
                                <span className='text-[#8f1d21]'>Hi,</span>{" "} I'm Carter
                            </h2>
                            <h1 className='text-3xl lg:text-4xl font-semibold scroll-px-10'>
                                <span>{text}</span>
                                <Cursor cursorColor='#8f1d21' />
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-items-end flex-col items-center h-full md:m'>
                    <div className='z-0 relative flex justify-center items-center'>
                        <div className='absolute border [#333333] rounded-full h-[300px] w-[300px]
        mt-52 animate-ping'/>
                        <div className='test rounded-full border border-[#333333] h-[400px] w-[400px]
        absolute mt-52'/>
                        <div className='test2 rounded-full border border-[#8f1d21] opacity-20 h-[550px] w-[550px]
        absolute mt-52'/>
                    </div>
                    <img src='https://media.licdn.com/dms/image/C5603AQFft3QevGb1Ew/profile-displayphoto-shrink_400_400/0/1609867797275?e=1676505600&v=beta&t=xvze5-Qk6ZnjXLu00n78lPQRO6P-grocgbcLUzzIVgs' alt="this is me!" className='rounded-full h-2/3 w-2/3' />        
                </div>
                <div className='md:hidden'>
                    RANDOM BUTTON HERE
                </div>
            </div>
        </div>
    )
}

export default HomeHero