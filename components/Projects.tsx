import React from 'react'
import SpotifyPic from '../images/spotifyProj.png';
import Image from 'next/image';

type Props = {}

function Projects({ }: Props) {
    class Project {
        img: string;
        title: string;
        description: string;

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
        <div className='flex items-center w-full h-screen'>
            <div className='flex flex-col text-left md:flex-col
    max-w-full mx-auto items-center scrollbar-thin'>
                <h3 className='top-24 uppercase text-gray-500
        text-2xl'>
                    Projects
                </h3>
                <div className='flex flex-col overflow-hidden mx-auto max-w-full'>
                    <div className='flex overflow-x-scroll snap-x
        snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#8f1d21]/80 scrollbar-w-4/5'>
                        {projects.map((project, i) => (
                            <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-center
                items-center justify-center'>
                                <img className='scale-100'
                                    src={projects[i].img}
                                    alt=''
                                />

                                <div className='space-y-1 px-0 md:px-10 max-w-6xl'>
                                    <h4 className='text-2xl font-semibold text-center' >
                                        <span>
                                            {projects[i].title}
                                        </span>
                                    </h4>

                                    <p className='text-base text-center md:text-center p-5'>
                                        {projects[i].description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects