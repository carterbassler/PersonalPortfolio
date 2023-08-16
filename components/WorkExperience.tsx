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
    "https://media.licdn.com/dms/image/D4E0BAQHFIQZwzMLdXA/company-logo_200_200/0/1688216120005?e=1700092800&v=beta&t=wq8-FzTb0LbQF6uD3u6X9bPSsA0yh_obAfwmpuy41iM",
    "Software Engineer Intern",
    "June 2023 - August 2023",
    [
      "Developed a Microfrontend for BNY Mellon's WMT Private Banking Division using Angular, enhancing user interface and experience for wealth management desktop applications",
      "Assisted in the development of robust APIs with Spring Framework, integrating them with the frontend for seamless data transfer and optimized operations",
      "Implemented error handling mechanisms for 4 deployed applications, resolving pipelining errors, thus improving application reliability and stability"
    ],
  )
  const ex2 = new Experience(
    "Fermat Capital Management",
    "https://media.licdn.com/dms/image/C560BAQEOYSfm29u9lw/company-logo_200_200/0/1654718213903?e=1699488000&v=beta&t=GgKwND762xq33BbGWTrtDwRDkhFmC3LXBEt0IgKP6oU",
    "Software Engineer Intern",
    "June 2022 - August 2022",
    [
      "Produced .NET Core app to automate CAT Bond data filtration, reducing manual processing time by 5 hours per week, significantly enhancing workflow efficiency and productivity",
      "Built an ML model with a 92% accuracy rate and implemented a system to detect and report erroneous predictions, resulting in a reduction in misclassifications",
      "Optimized string manipulation operations by leveraging LINQ and REGEX, resulting in enhanced data processing speeds and system responsiveness",
    ]
  )
  const ex3 = new Experience(
    "Fermat Capital Management",
    "https://media.licdn.com/dms/image/C560BAQEOYSfm29u9lw/company-logo_200_200/0/1654718213903?e=1699488000&v=beta&t=GgKwND762xq33BbGWTrtDwRDkhFmC3LXBEt0IgKP6oU",
    "Software Engineer Intern",
    "June 2021 - August 2021",
    [
      "Developed a Angular web app that has been used to visualize over 40,000 data points of insurance loss, aiding in the decision-making process",
      "Enhanced data visualization by integrating the Google Maps API, facilitating clearer dataset comprehension and expediting decision-making processes",
      "Improved application responsiveness by handling more asynchronous calls efficiently with Threads and Promises",
    ]
  )
  const ex4 = new Experience(
    "Top Hat Tutors",
    "https://media.licdn.com/dms/image/C4D0BAQEGXJxKNDqBgw/company-logo_200_200/0/1519922081689?e=1699488000&v=beta&t=EHYtwXZEIoJ4q4_FJ-yQ3oEFXbNJkM0pTikXaBDiGe0",
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