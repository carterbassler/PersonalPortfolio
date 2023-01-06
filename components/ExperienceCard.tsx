import React from 'react'
import { motion } from 'framer-motion'
import WorkExperience from './WorkExperience';
import { Libre_Barcode_EAN13_Text } from '@next/font/google';

class Experience {
    company: string;
    image: string;
    role: string;
    duration: string;
    bulletPoints: string[];
    constructor(company: string, image: string, role: string, duration: string, bulletPoints: string[]) {
      this.company = company;
      this.image = image;
      this.role = role;
      this.duration = duration;
      this.bulletPoints = bulletPoints;
    }
  }

type Props = {
    experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center
    space-y-2 md:space-y-5 flex-shrink-0 w-[330px] md:w-[600px] xl:w-[700px] snap-center
    bg-[#292929] p-8 md:p-10 hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }} 
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{once: true }}
        className='w-24 h-24 md:w-32 md:h-32 rounded-full md:rounded-full xl:w-[130px]
        xl:h-[130px] object-cover object-center'
        src={experience.image}
        alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-2xl md:text-2xl font-light'>{experience.company}</h4>
            <p className='font-bold text-lg md:text-xl mt-1'>{experience.role}</p>
            <p className='py-2 md:py-4 text-lg text-gray-300'>{experience.duration}</p>

            <ul className='list-disc space-y-3 ml-5 text-xs md:text-sm xl:text-base'>
                {experience.bulletPoints.map(bulletPoint =>(
                    <li key={bulletPoint}>{bulletPoint}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard

