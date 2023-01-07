import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({ }: Props) {
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
  const ex1 = new Experience(
    "Fermat Capital Management",
    "https://media.licdn.com/dms/image/C560BAQEOYSfm29u9lw/company-logo_200_200/0/1654718213903?e=1679529600&v=beta&t=ahCfDpLkPBCr2XH22wDDnAhImetvrQW8CzuTnvyhilc",
    "Software Engineer Intern",
    "June 2022 - August 2022",
    [
      "Produced .NET Core web application to automate the filtration of CAT Bond data",
      "Constructed an ML model intended to classify correct bond data using Multi-Class Text Classification that runs with 92% accuracy",
      "Developed intuitive and adaptive code using LINQ and REGEX to more efficiently handle string manipulation",
    ]
  )
  const ex2 = new Experience(
    "Fermat Capital Management",
    "https://media.licdn.com/dms/image/C560BAQEOYSfm29u9lw/company-logo_200_200/0/1654718213903?e=1679529600&v=beta&t=ahCfDpLkPBCr2XH22wDDnAhImetvrQW8CzuTnvyhilc",
    "Software Engineer Intern",
    "June 2021 - August 2021",
    [
      "Developed JavaScript Web Application to visually represent insurance loss in categorized fashion",
      "Utilized Google Maps API to upload and visualize datasets in order to help facilitate decisions",
      "Handled asynchronous calls and worked with Threads and Promises",
    ]
  )
  const ex3 = new Experience(
    "Top Hat Tutors",
    "https://media.licdn.com/dms/image/C4D0BAQEGXJxKNDqBgw/company-logo_200_200/0/1519922081689?e=1680134400&v=beta&t=-4TdLDDusccvvxIbftTiaNgFZpu-t2kvzs3UTpXeGOE",
    "STEM Tutor",
    "Sept 2019 - Nov 2020",
    [
      "Tutored middle school to high school students one-on-one and group sessions",
      "Subjects include: Calculus, Computer Science, Economics, etc"
    ]
  )
  return (
    <div className='flex items-center w-full h-screen'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative text-left
    md:flex-col max-w-full px-5 mx-auto items-center'>
        <div className='align-bottom'>
          <h3 className='top-24 uppercase
        text-gray-500 text-2xl justify-center'>
            Experience
          </h3>
        </div>
        <div className='flex flex-row overflow-hidden max-w-full'>

          <div className='w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#8f1d21]/80'>
            <ExperienceCard experience={ex1} />
            <ExperienceCard experience={ex2} />
            <ExperienceCard experience={ex3} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default WorkExperience;