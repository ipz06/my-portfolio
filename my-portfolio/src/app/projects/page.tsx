"use client";
import style from '../ui/card.module.css';
import Link from 'next/link';
// import Image from 'next/image';
import { MdOutlineArrowOutward } from "react-icons/md";

import { useState } from 'react';

export default function Projects () {

    const [isProjectHovered, setIsProjectHovered] = useState(false)

    return (
        <div id='projects'>
            <h1 className="text-3xl font-bold tracking-tight text-[#3BBA9C] py-5">PROJECTS</h1>
            <Link
            href='https://gitlab.com/ipz06/fitness-tracking-app'>
                <div className={style.card} onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}>
                    <div className='flex flex-row gap-2 items-center'>
                        <h3 className="font-bold text-[#d6d6d6] py-1">7FIT</h3>
                        <p className="font-bold text-[#d6d6d6] py-1" onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}> 
                            <MdOutlineArrowOutward
                            id='img'
                            
                            size={isProjectHovered ? 20 : 10}
                            alt="Pointer for link"
                            />

                        </p>
                        
                    </div>
                    <div className='flex flex-row justify-between text-[#d6d6d6]'>
                        <span>Telerik Academy </span >
                        <span className='italic'>05.2023 - 06.2023</span>
                    </div>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Fitness Tracking Application</h4>
                    <ul className='text-[#d6d6d6]'>
                        <li>- Create workouts, goals and track statistics</li>
                        <li>- Add friends, meals and following up on nutrition</li>
                        <li>- I worked on the implementation of the charts /statistics/, which turned out
                            to be a great challenge for me, and the difficulties I overcame helped me to
                            enrich my knowledge of React.Participated in monitoring the implementation of the construction process
                        </li>
                    </ul>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Technologies:</h4>
                    <span> React, JavaScript, Chakra UI, Firebase</span>
                </div>
            </Link>
            
        </div>
    )
};