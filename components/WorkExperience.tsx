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
    "BNY Mellon",
    "https://media.licdn.com/dms/image/D4E0BAQHFIQZwzMLdXA/company-logo_200_200/0/1688216120801/bny_mellon_logo?e=1709769600&v=beta&t=wPzeIc3YBmrtNoe1oXZui9Pk_h1MBrWCLFHIz48YoLU",
    "Software Engineer Intern",
    "June 2023 - August 2023",
    [
      "Developed a Microfrontend for the Wealth Desktop Platform using Angular, streamlining internal processes and improving application performance 60% by optimizing data access",
      "Assisted in the development of REST APIs with Spring Framework, integrating them with the frontend for seamless data transfer and optimized operations",
      "Designed and implemented error handling mechanisms for key applications, leading to a 70% reduction in pipelining errors and enhancing system reliability for 300+ users"
    ],
  )
  const ex2 = new Experience(
    "Fermat Capital Management",
    "https://media.licdn.com/dms/image/C560BAQEOYSfm29u9lw/company-logo_200_200/0/1654718214365/fermat_capital_management_llc_logo?e=1709769600&v=beta&t=F9iUzN0DDkqQZ8EiL7v-f4f5_3x3bt31Gh-mw_OgF3k",
    "Software Engineer Intern",
    "June 2022 - August 2022",
    [
      "Produced .NET Core app to automate Catastrophe (CAT) bond data filtration, reducing manual processing time by 5 hours per week, significantly enhancing workflow efficiency and productivity",
      "Built an ML model with a 92% accuracy rate and implemented a system to detect and report erroneous predictions",
      "Optimized string manipulation operations by leveraging LINQ and REGEX, resulting in enhanced data processing speeds and system responsiveness",
    ]
  )
  const ex3 = new Experience(
    "Fermat Capital Management",
    "https://media.licdn.com/dms/image/C560BAQEOYSfm29u9lw/company-logo_200_200/0/1654718214365/fermat_capital_management_llc_logo?e=1709769600&v=beta&t=F9iUzN0DDkqQZ8EiL7v-f4f5_3x3bt31Gh-mw_OgF3k",
    "Software Engineer Intern",
    "June 2021 - August 2021",
    [
      "Developed a Angular web app that has been used to visualize over 40,000 data points of insurance loss",
      "Enhanced data visualization by integrating the Google Maps API, facilitating clearer dataset comprehension and expediting decision-making processes",
      "Improved application performance and ensured seamless user experience by optimizing asynchronous call handling with Threading and Promises, leading to faster data retrieval and processing",
    ]
  )
  const ex4 = new Experience(
    "Top Hat Tutors",
    "https://media.licdn.com/dms/image/C4D0BAQEGXJxKNDqBgw/company-logo_200_200/0/1631352505125?e=1709769600&v=beta&t=yolGrfoTm9xnQEgXlzCzctnH-59CHd0ck74EqCh0wDw",
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
            <ExperienceCard experience={ex4} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default WorkExperience;