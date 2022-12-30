import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { FaSpotify, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { isConstructorDeclaration } from 'typescript'
import { AiFillPhone } from 'react-icons/ai'


type Props = {}

function Contact({ }: Props) {
    const mailtoHref = "mailto:carterbassler@gmail.com"

    return (
        <div className='h-screen relative flex flex-col text-center md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase text-gray-500
        text-2xl'>
                Contact Me
            </h3>
            <div className='relative w-full flex'>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-center
                items-center justify-center p-20 md:py-44 md:px-60 h-screen'>
                    <div className='flex flex-row items-center'>
                        <div className='p-5 cursor-pointer'>
                            <a href='https://www.linkedin.com/in/carter-bassler-856a581a1/'>
                                <FaLinkedinIn
                                    className='hover:-translate-y-2 ease-in-out duration-200
                                    hover:text-[#8f1d21]'
                                    size={50}
                                />
                            </a>
                        </div>
                        <div className='p-5 cursor-pointer'>
                            <a href='https://github.com/carterbassler'>
                                <FaGithub
                                    className='hover:-translate-y-2 ease-in-out duration-200
                                    hover:text-[#8f1d21]'
                                    size={50}
                                />
                            </a>
                        </div>
                        <div className='p-5 cursor-pointer'>
                            <a href='https://open.spotify.com/user/bassler.spotify?si=c80ce6f95e5d48bb'>
                                <FaSpotify
                                    className='hover:-translate-y-2 ease-in-out duration-200
                                    hover:text-[#8f1d21]'
                                    size={50}
                                />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='pt-5'>
                                <div className='flex items-center space-x-3 justify-center'>
                                    <AiFillPhone className='h-7 w-7 text-[#8f1d21]'/>
                                    <span className='text-xl'>203-914-5700</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='pt-5'>
                                <button className='px-6 py-2 rounded-full border text-lg
                                border-zinc-500 text-zinc-500 hover:border-[#8f1d21]
                                hover:bg-[#8f1d21] hover:text-white hover:-translate-y-1 
                                ease-in-out duration-200'>
                                    <a href={mailtoHref}>carterbassler@gmail.com</a>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className='pt-5'>
                                <button className='px-6 py-2 rounded-full border text-lg
                                border-zinc-500 text-zinc-500 hover:border-[#8f1d21]
                                hover:bg-[#8f1d21] hover:text-white hover:-translate-y-1 
                                ease-in-out duration-200'>
                                    <a href='/Bassler_Resume.pdf'>Download My Resume</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

function setState(arg0: { showConfirmation: boolean }) {
    throw new Error('Function not implemented.')
}
