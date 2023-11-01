import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Image from 'next/image'
import ProfilePic from '../images/headshot.jpeg';
import { motion, useMotionValue, useTransform } from 'framer-motion';

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "UVA Student",
            "Music Enthusiast",
            "Avid Aston Villa Fan"
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 justify-center 
    text-center overflow-hidden'>
            <BackgroundCircles />
            <div className="relative h-32 w-32 mx-auto">
                <Image className='object-contain rounded-full'
                    layout='fill'
                    objectFit='contain'
                    src="https://media.licdn.com/dms/image/C5603AQFft3QevGb1Ew/profile-displayphoto-shrink_200_200/0/1609867797275?e=1682553600&v=beta&t=TjkU-hYkTwaCmck3U4Ohn1TAqssGC8B0Trv7L6oeHz8" alt={''}
                />
            </div>
            <div className='z-20'>
                <h2 className='text-xl text-gray-500 pb-2'>
                    Computer Science Student
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#8f1d21' />
                </h1>
            </div>
        </div>
    )
}

export default Hero