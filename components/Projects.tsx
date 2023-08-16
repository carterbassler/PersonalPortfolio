import React, { useState } from 'react';
import Popup from './Popup';
import Project from './Project';

class Proj {
  name: string;
  icon: string;
  devStage: string;
  description : string;
  externalLink : string;
  liveImage : string;
  constructor(_name: string, _icon: string, _devStage: string, _description : string, _externalLink : string, _liveImage : string) {
    this.name = _name;
    this.icon = _icon;
    this.devStage = _devStage;
    this.description = _description
    this.externalLink = _externalLink
    this.liveImage = _liveImage
  }
}

type ProjectProps = {
  proj: Proj;
  onExpandView: (project: Proj) => void;
};

type Props = {};

function Projects({}: Props) {
  const project1 = new Proj(
    "ImperiumFit",
    "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/23/10/e1/2310e19e-719b-4644-f45d-4b3fca36d098/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
    "Check it out on the App Store",
    "A full-stack Flutter/Dart mobile application with workout tracking, exercise addition, and set management features. Incorporated Firebase Firestore for real-time data handling and Firebase Authentication for secure user access control.",
    "https://apps.apple.com/us/app/imperiumfit/id6449546227",
    "imperiumProj1.png"
  );
  const project2 = new Proj(
    "Vibify",
    "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/Eh2xNF9-XhqcyfcYpxhmZlsZV1dmMbl38kfVMcy_WPFOCwIX5kMMmeib4avJtxu9p9f4PMDTuJmMrJ5ISI-vwjMnsJZq7qgVapwLnehwcCvhLWOaW0dl_w1l6LGNmpYaOg28fVPh4Uc8j2ku2NBp-tD2eVCXHn_pNz-7Nk3d5MwmvNTJ5XRWos_OLMu-hw7cnRDGq7a2-GAWoWmova4KXl76C2hFoZSdOFEaonHNn0YlEMzZztjWYYnIS6rtWRYR4EBJ5dcRmxg7DZycYTj5fhbvNfCiodOQlWRaNXfe2IZDcmwxcGUZZ-M-2wYWcnQsKsDwrd6vp4NpsCY-R4N4kvuExtURevGg6d5Eatc95y1_xQm6pH7KHfoCBWyqI6Tf6W8f7xru6agPT7NZPBT6xV-_UEXnKvZeMjM6I5NcE18=/MTE6OTQ6MjBUNTItMzAtMw==",
    "Try it Yourself",
    "A Next JS web application that uses NextAuth and the Spotify API to allow users to log in and automate the process of saving their 'Discover Weekly' playlist.    ",
    "https://music-helper-app.vercel.app/",
    "spotifyProj.png"
  );
  const project3 = new Proj(
    "Fifa Arbitrage Sniping Script",
    "https://media.contentapi.ea.com/content/dam/ea/fifa/images/fifa-generic-featured-tile-16x9.png.adapt.crop191x100.1200w.png",
    "",
    "A FIFA Ultimate Team sniping bot that utilizes arbitrage tactics to identify and acquire valuable players at a lower cost. Utilized python to scrape player data and make intelligent purchasing decisions based on market trends and player performance.",
    "https://github.com/carterbassler/FifaSnipingScript",
    "fifaProj.png"
  );
  const project4 = new Proj(
    "Loo's List Clone",
    "https://media.cnn.com/api/v1/images/stellar/prod/200617131110-02-uva-reworked-logo-0616.jpg?q=w_1600,h_900,x_0,y_0,c_fill",
    "View Project on GitHub",
    "A full-stack Django web application to display real-time University of Virginia class listings, integrated with Google user accounts for secure authentication, and utilized PostgreSQL for efficient data storage and access.",
    "https://github.com/uva-cs3240-f22/project-a-12",
    "loosList.png"
  );

  const [buttonPopup, setButtonPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Proj | null>(null);

  function expandView(project: Proj) {
    setSelectedProject(project);
    setButtonPopup(true);
  }

  return (
    <div className='h-screen relative flex flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase text-gray-500 text-2xl'>Projects</h3>
      <div className='relative w-full flex'>
        <div className='w-screen flex-shrink0 snap-center flex flex-col space-y-center items-center justify-center p-20 md:py-44 md:px-60 h-screen'>
          <div className='flex flex-row items-center'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
              <Project proj={project1} onExpandView={expandView} />
              <Project proj={project2} onExpandView={expandView} />
              <Project proj={project3} onExpandView={expandView} />
              <Project proj={project4} onExpandView={expandView} />
            </div>
          </div>
        </div>
      </div>
      {buttonPopup && selectedProject && 
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} proj={selectedProject} />}
    </div>
  );
}

export default Projects;