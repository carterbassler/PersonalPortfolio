import React, {useState} from 'react'
import {FaBars, FaTimes, } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';


type Props = {}

function NavBar({}: Props) {
    
    const [nav, setNav] = useState(false);

    const links = [
        {
            num: 1,
            id: '#about',
            link: 'About Me'
        },
        {
            num: 2,
            id: '#experience',
            link: 'Experiences'
        },
        {
            num: 3,
            id: '#projects',
            link: 'Projects'
        },
        {
            num: 4,
            id: '#contact',
            link: 'Contact Me'
        },
    ]
  return (
    <nav className="bg-[#1A1A1D] sticky z-50 top-0 flex justify-between flex-wrap items-center h-20 w-full px-4 text-base text-white">
        <div className="md:mx-auto hidden w-full md:flex items-center md:w-auto" id="menu">
            <ul className="text-base text-zinc-500 md:flex md:justify-between md:pt-0">
                {links.map(({num, id, link}) => (
                    <li key={num}><a href={id} className="md:px-12 block hover:text-white hover:scale-105 duration-200 fill-none ">
                       {link} 
                    </a></li>
                ))}
            </ul>
            
        </div>
        <div className = "md:hidden cursor-pointer pr-4 z-10">
            <a href=''>
                <AiFillHome color = {'#9E9E9E'} size={20}/>
            </a>
        </div>
        <div onClick = {()=>setNav(!nav)} className = "md:hidden cursor-pointer pr-4 z-10">
            {nav ? <FaTimes color = {'#9E9E9E'} size={20}/> : <FaBars color = {'#9E9E9E'} size = {20}/>}
        </div>
        
        {nav && (
        <ul className = "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-zinc-900">
                {links.map(({num, id, link}) => (
                    <li key={num}><a href={id} className="text-gray-500 py-2 cursor-pointer text-xl block hover:text-white hover:scale-105 duration-200">
                       <div onClick={()=>setNav(!nav)}>
                        {link}
                        </div>
                    </a></li>
                ))}
        </ul>
        )}

    </nav>
  )
}

export default NavBar