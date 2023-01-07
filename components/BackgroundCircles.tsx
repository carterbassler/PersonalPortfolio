import { motion } from "framer-motion";
import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div
     className='relative flex justify-center items-center'
    >
        <div className='absolute border [#333333] rounded-full h-[200px] w-[200px]
        mt-52 animate-ping'/>
        <div className='rounded-full border border-[#333333] h-[400px] w-[400px]
        absolute mt-52'/>
        <div className='rounded-full border border-[#8f1d21] opacity-20 h-[550px] w-[550px]
        absolute mt-52'/>
    </div>
  )
}

export default BackgroundCircles