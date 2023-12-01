"use client";
import style from '../ui/card.module.css';
import Link from 'next/link';
// import Image from 'next/image';
import { MdOutlineArrowOutward } from "react-icons/md";

import { useState } from 'react';

export default function Projects () {

    const [isProjectHovered, setIsProjectHovered] = useState(false)

    return (
        <section id='projects' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-[#3BBA9C] text-lg font-bold tracking-widest lg:sr-only'>PROJECTS</h2>
            </div>
            <h1 className="text-3xl font-bold tracking-widest text-[#3BBA9C] py-5 lg:pb-5 sr-only sm:not-sr-only">PROJECTS</h1>
            <Link
            href='https://gitlab.com/ipz06/learningtasks'
            onMouseEnter={() => setIsProjectHovered(true)} 
            onMouseLeave={() => setIsProjectHovered(false)}
            >
                <div className={style.card} >
                    <div className='flex flex-row gap-2 items-center'>
                        <h3 className="font-bold text-[#d6d6d6] py-1">Learning Course</h3>
                        <p className="font-bold text-[#d6d6d6] py-1" onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}> 
                            <MdOutlineArrowOutward 
                            size={isProjectHovered ? 20 : 10}
                            alt="Pointer for link"
                            />
                        </p> 
                    </div>
                    <div className='flex flex-row justify-between text-[#d6d6d6]'>
                        <span>Personal Project </span >
                        <span className='italic'>09.2023 - </span>
                    </div>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Contains small projects from Udemy Course - React, Redux and NextJs. Includes:</h4>
                    <ul className='text-[#d6d6d6]'>
                        <li>- React Components and Hooks</li>
                        <li>- State Management - React Context API and React Redux</li>
                        <li>- Routing & Route-related data fetching with React Router</li>
                        <li>- Build fullstack React apps with NextJS</li>
                        <li>- Build standalone React apps & applications connected to a backend via HTTP</li>
                        <li>- Implement user authentication in React apps</li>
                        <li>- React Unit Testing</li>
                        <li className='font-bold'>- Includes individual practice tasks and collaborative tasks.</li>
                    </ul>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Technologies:</h4>
                    <span> React, JavaScript, Redux, HTML, CSS, Tailwind CSS, NextJs</span>
                </div>
            </Link>
            <Link
            href='https://gitlab.com/ipz06/greet-task'>
                <div className={style.card} onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}>
                    <div className='flex flex-row gap-2 items-center'>
                        <h3 className="font-bold text-[#d6d6d6] py-1">Greet API Task</h3>
                        <p className="font-bold text-[#d6d6d6] py-1" onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}> 
                            <MdOutlineArrowOutward 
                            size={isProjectHovered ? 20 : 10}
                            alt="Pointer for link"
                            />
                        </p> 
                    </div>
                    <div className='flex flex-row justify-between text-[#d6d6d6]'>
                        <span>Personal Project </span >
                        <span className='italic'>10.2023 - 10.2023</span>
                    </div>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Greet API Task</h4>
                    <ul className='text-[#d6d6d6]'>
                        <li>- Consume API and present the result as cards</li>
                        <li>- You can filter cards by category and the result is always sorted by yor choice -  by name or by price</li>
                        <li>- The pagination is implemented with infinite scrolling</li>
                    </ul>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Technologies:</h4>
                    <span> React, JavaScript, HTML, CSS</span>
                </div>
            </Link>
            <Link
            href='https://tic-tac-toe-rho.vercel.app/'>
                <div className={style.card} onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}>
                    <div className='flex flex-row gap-2 items-center'>
                        <h3 className="font-bold text-[#d6d6d6] py-1">Tic-Tac-Toe</h3>
                        <p className="font-bold text-[#d6d6d6] py-1" onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}> 
                            <MdOutlineArrowOutward  
                            size={isProjectHovered ? 20 : 10}
                            alt="Pointer for link"
                            />
                        </p>    
                    </div>
                    <div className='flex flex-row justify-between text-[#d6d6d6]'>
                        <span>Personal Project </span >
                        <span className='italic'>09.2023 - 10.2023</span>
                    </div>
                    <h4 className="font-bold text-[#d6d6d6] py-1">A Simple Game</h4>
                    <ul className='text-[#d6d6d6]'>
                        <li>- Simple game board with `X` and `O`, which you can play with a buddy</li>
                        <li>- Add your name and the name of your buddy and start play</li>
                        <li>- The name of the winner will be displayed at the end</li>
                    </ul>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Technologies:</h4>
                    <span> React, JavaScript, HTML, CSS</span>
                </div>
            </Link>
            <Link
            href='https://gitlab.com/ipz06/food-order-app'>
                <div className={style.card} onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}>
                    <div className='flex flex-row gap-2 items-center'>
                        <h3 className="font-bold text-[#d6d6d6] py-1">Food-order-app</h3>
                        <p className="font-bold text-[#d6d6d6] py-1" onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}> 
                            <MdOutlineArrowOutward
                            size={isProjectHovered ? 20 : 10}
                            alt="Pointer for link"
                            />
                        </p>   
                    </div>
                    <div className='flex flex-row justify-between text-[#d6d6d6]'>
                        <span>Personal Project </span >
                        <span className='italic'>09.2023 - 10.2023</span>
                    </div>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Dummy Food Order App</h4>
                    <ul className='text-[#d6d6d6]'>
                        <li>- Consume dummy data from Firebase and sent data for the order and the client to Firebase</li>
                        <li>- Add meals to the cart, remove from the cart and change the amount</li>
                    </ul>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Technologies:</h4>
                    <span> React, JavaScript, Firebase, HTML, CSS</span>
                </div>
            </Link>
            <Link
            href='https://gitlab.com/ipz06/game-hub'>
                <div className={style.card} onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}>
                    <div className='flex flex-row gap-2 items-center'>
                        <h3 className="font-bold text-[#d6d6d6] py-1">GAME-HUB</h3>
                        <p className="font-bold text-[#d6d6d6] py-1" onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}> 
                            <MdOutlineArrowOutward
                            size={isProjectHovered ? 20 : 10}
                            alt="Pointer for link"
                            />
                        </p>    
                    </div>
                    <div className='flex flex-row justify-between text-[#d6d6d6]'>
                        <span>Personal Project </span >
                        <span className='italic'>07.2023 - 08.2023</span>
                    </div>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Project for practicing and learning TypeScript</h4>
                    <ul className='text-[#d6d6d6]'>
                        <li>- Fetch, Search, Order and Group games</li>
                        <li>- Light/Dark Mode</li>
                    </ul>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Technologies:</h4>
                    <span> React, JavaScript, Typescript, HTML, CSS, SCSS</span>
                </div>
            </Link>
            <Link
            href='https://gitlab.com/ipz06/fitness-tracking-app'>
                <div className={style.card} onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}>
                    <div className='flex flex-row gap-2 items-center'>
                        <h3 className="font-bold text-[#d6d6d6] py-1">7FIT</h3>
                        <p className="font-bold text-[#d6d6d6] py-1" onMouseEnter={() => setIsProjectHovered(true)} onMouseLeave={() => setIsProjectHovered(false)}> 
                            <MdOutlineArrowOutward      
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
            <div className={style.card}>
                <div className='flex flex-row gap-2 items-center'>
                    <h3 className="font-bold text-[#d6d6d6] py-1">ASK.me</h3>    
                    </div>
                    <div className='flex flex-row justify-between text-[#d6d6d6]'>
                        <span>Telerik Academy </span >
                        <span className='italic'>04.2023 - 05.2023</span>
                    </div>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Single - page application - Parenting forum</h4>
                    <ul className='text-[#d6d6d6]'>
                        <li>- Create user profile with personal information and a photo</li>
                        <li>- Create, search, like, comment and delete posts</li>
                        <li>- Moderate users and content as an admin</li>
                        <li>- We overcame various difficulties regarding the organization of work with the
                            team, after which we became more united
                        </li>
                    </ul>
                    <h4 className="font-bold text-[#d6d6d6] py-1">Technologies:</h4>
                    <span> React, JavaScript, Chakra UI, Firebase</span>
            </div>
            <div className={style.card}>
                <div className='flex flex-row gap-2 items-center'>
                            <h3 className="font-bold text-[#d6d6d6] py-1">Giphy</h3>    
                        </div>
                        <div className='flex flex-row justify-between text-[#d6d6d6]'>
                            <span>Telerik Academy </span >
                            <span className='italic'>03.2023 - 04.2023</span>
                        </div>
                        <h4 className="font-bold text-[#d6d6d6] py-1">Web platform for Giphy</h4>
                        <ul className='text-[#d6d6d6]'>
                            <li>- Browse, search, upload and like Giphy</li>
                        </ul>
                        <h4 className="font-bold text-[#d6d6d6] py-1">Technologies:</h4>
                        <span> JavaScript, HTML, CSS</span>
            </div>
           
            
        </section>
    )
};