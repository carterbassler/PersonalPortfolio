import { motion } from 'framer-motion';
import React from 'react';

class Proj {
  name: string;
  icon: string;
  devStage: string;
  description: string;
  externalLink: string;
  liveImage: string;
  constructor(_name: string, _icon: string, _devStage: string, _description: string, _externalLink: string, _liveImage: string) {
    this.name = _name;
    this.icon = _icon;
    this.devStage = _devStage;
    this.description = _description;
    this.externalLink = _externalLink;
    this.liveImage = _liveImage;
  }
}

type Props = {
  proj: Proj;
  onExpandView: (project: Proj) => void;
};

function Project({ proj, onExpandView }: Props) {
  return (
    <div className='group relative flex cursor-pointer'
      onClick={() => onExpandView(proj)} // added onClick handler here
    >
      <motion.img
        src={proj.icon}
        className='rounded-md border border-gray-500 object-cover w-24 h-24 xl:w-48 xl:h-48 filter group-hover:greyscale transition duration-300 ease-in-out'
        alt={proj.name}
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24
       xl:w-48 xl:h-48 rounded-md z-0 '>
        <div className='flex items-center justify-center h-full'>
          <p className='md:text-md xl:text-xl text-sm font-bold text-black opacity-100'>{proj.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;