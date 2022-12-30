import React from 'react'
import SpotifyPic from '../images/spotifyProj.png';

type Props = {}

function Projects({}: Props) {
    class Project {
        img: string;
        title: string;
        description:string;

        constructor(img: string, title: string, description: string) {
            this.img = img;
            this.title = title;
            this.description = description;
        }
    }
    
    const projects: Project[] = [
        new Project(
            "https://i.ibb.co/tMQ8wd0/fifaProj.png",
            "Fifa Arbitrage Program",
            "Designed and implemented a FIFA Ultimate Team sniping bot that utilizes arbitrage tactics to identify and acquire valuable players at a lower cost. Utilized python to scrape player data and make intelligent purchasing decisions based on market trends and player performance."
        ),
        new Project(
            "https://i.ibb.co/6YpZhmG/spotify-Proj.png",
            "Spotify Save Discover Weekly",
            "Developed a Python program that utilizes the Spotify API to automate the creation and storage of a weekly playlist. The program retrieves the songs from the user's 'Discover Weekly' playlist and stores them in a new playlist, allowing the user to access and listen to their previous week's songs at any time. Utilized [relevant Python libraries or modules] to interact with the Spotify API and manage playlist creation and storage.",
        ),
    ];
    return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase text-gray-500
        text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#8f1d21]/80'>
            {projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-center
                items-center justify-center p-20 md:p-40 h-screen'>
                    <img className='w-50 h-50 md:w-50 md:h-50'
                    src={projects[i].img}
                    alt=''
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-2xl font-semibold text-center' >
                            <span>
                               {projects[i].title} 
                            </span> 
                        </h4>

                        {/* <div className='marquee-container'>
                            <div className='marquee'>
                                <div className='marquee-inner'>
                                    HELLO
                                    HELLO
                                    HELLO
                                    HELLO
                                </div>
                            </div>
                        </div> */}

                        <p className='text-base text-center md:text-center'> 
                            {projects[i].description}
                        </p>
                    </div> 
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#8f1d21]/10 left-0
        h-[500px] -skew-y-12'/>
    </div>
  )
}

export default Projects