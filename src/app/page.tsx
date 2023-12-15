'use client'
import Image from 'next/image'
import Voice from './voice/page';
import { navMenu } from './ui/navMenu';
import {AiFillGithub, AiFillGitlab, AiFillLinkedin} from 'react-icons/ai'
import About from '@/app/about/page';
import Skills from '@/app/skills/page';
import Education from './education/page';
import Contact from './contact/page';
import Link from 'next/link';
import Projects from './projects/page';
import { TbTicTac } from "react-icons/tb";
import { BiMessageDetail } from "react-icons/bi";
import { useEffect } from 'react';
import 'react-tooltip/dist/react-tooltip.css';

import { Tooltip } from 'react-tooltip';
import './animation.css';

export default function Home() {

  const sections = [
    'about',
    'knowledge',
    'projects',
    'education',
    'testimonials',
    'contact',
  ];

  useEffect(() => {
  
    const observer = new IntersectionObserver(entries => {

      let intersectionFound = false;

      // console.log('ENTRIES', entries)

      entries.forEach(entry => {
        if (intersectionFound) return;

        
        const currentSection = sections.find(section => entry.target.id === section);
        const navElement = document.getElementById(`${currentSection}-nav`);

        const navIndicator = navElement?.querySelector('.nav-indicator');
        const navText = navElement?.querySelector('.nav-text')

        if (entry.isIntersecting) {
          // console.log(`nav: ${currentSection}`);
          navIndicator?.classList.remove('w-8');
          navIndicator?.classList.add('w-16', 'bg-slate-200');
          navText?.classList.add('text-slate-200')
   

          intersectionFound = true;

        } else {
          navIndicator?.classList.add('w-8');
          navIndicator?.classList.remove('w-16', 'bg-slate-200');
          navText?.classList.remove('text-slate-200')
        }
      });
    });

    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    // Clean up the observer on component unmount
    return () => {
      // Unobserve each section element
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });

      observer.disconnect();
    };
  }, []);

  return (
    <div
    className={`flex w-full font-sans min-h-screen mx-auto max-w-screen-xl bg-[#1E1F24] md:px-12 lg:px-24 lg:py-0 md:py-10`}
    >
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:w-1/2 lg:py-12'>
        <aside>  
          <div>
            <Image 
            className='py-10'
            src='/profile.JPG'
            width={200}
            height={100}
            objectFit='cover'
            alt='Profile image'/>
    
            <h1 className="font-bold tracking-normal text-[#707070] text-4xl sm:text-5xl">
              <a href='/'>Ivanka Zlateva</a>
            </h1>
          
            <h2 className="mt-3 text-lg font-medium tracking-normal text-[#3BBA9C] sm:text-xl">
                Front End Developer<span className="text-lg font-medium tracking-tight text-[#707070] sm:text-xl"> | Architect</span>
            </h2>
            
            <ul 
            className='flex flex-row items-center my-2 gap-5 py-1 text-[#707070]'
            aria-label='Social media'
            >
              <Link href='https://github.com/ipz06' target='_blank' className='hover:text-slate-200'>
                <AiFillGithub size={20} />
              </Link>
              <Link href='https://gitlab.com/ipz06'  target='_blank' className='hover:text-slate-200'>
                <AiFillGitlab size={20}/>
              </Link>
              <Link href='https://www.linkedin.com/in/ivanka-zlateva-aa2258132/'  target='_blank' className='hover:text-slate-200'>
                <AiFillLinkedin size={20}/>              
              </Link>
              <Link 
              href='/sayHello'
              target='_blank'
              data-tooltip-id="cv"
              data-tooltip-content="If interested, write for CV!"
              data-tooltip-place="right"
              >
                <Tooltip id="cv" arrowColor='#707070' style={{ backgroundColor: "#707070", color: "white" }}/>
                <h1 className='font-bold text-l hover:text-slate-200'>CV</h1>
              </Link> 
              
            </ul>
            </div>
            <nav className='nav hidden lg:block'>
              <ul className='my-5 w-max'>
                {navMenu.map(el => <li key={el.ref} id={`${el.ref}-nav`}><a className='group flex items-center py-3 active' href={`#${el.ref}`} >
                    <span className='nav-indicator mr-4 h-px w-8 bg-[#707070] transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none' >
                    </span>
                    <span className='nav-text text-xs font-bold uppercase tracking-widest text-[#707070] group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                      {el.name}
                    </span>
                  </a></li>
                )}
              </ul>
            </nav>
        </aside>
        </header>
        <main className="lg:pt-20 sm:pt-20 lg:w-1/2  bg-[#1E1F24] lg:py-20 sm:py-2" >
          <div id='extra' className='flex flex-row justify-center items-center pl-20 lg:pb-16 sm:pb-4 text-[#707070]'>
          <Link 
              href='/sayHello'
              className=' hover:text-[#3BBA9C] z-0 relative' 
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Write me anything!"
              data-tooltip-place="top"
              >
                <Tooltip id="my-tooltip" arrowColor='#707070' style={{ backgroundColor: "#707070", color: "white" }}/>

              <div className="letter-image">
                <div className="animated-mail">
                  <div className="back-fold"></div>
                  <div className="letter">
                    <div className="letter-border"></div>
                    <div className="letter-title"></div>
                    <div className="letter-context"></div>
                    <div className="letter-stamp">
                      <div className="letter-stamp-inner"></div>
                    </div>
                  </div>
                  <div className="top-fold"></div>
                  <div className="body"></div>
                  <div className="left-fold"></div>
                </div>
                <div className="shadow"></div>
              </div>
            </Link>
            {/* <Link
            href='https://tic-tac-toe-rho.vercel.app/'
            target='_blank'
            className='hover:animate-spin  hover:text-[#3BBA9C]'>
              <TbTicTac size={30}/>
            </Link> 
            <span >
              <Link 
              href='/sayHello'
              className=' hover:text-[#3BBA9C] z-0 relative' 
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Write me anything!"
              data-tooltip-place="top"
              >
                <Tooltip id="my-tooltip" arrowColor='#707070' style={{ backgroundColor: "#707070", color: "white" }}/>
                <BiMessageDetail size={30}/>
              </Link>
            </span>  */}
            
           
          </div>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Voice/>
          <Contact />
          <footer className='max-w-md py-16 px-5 text-sm text-[#707070] sm:pb-0 '>
            <div className='flex justify-between'>
              <div>
                <p>
                {`All rights reserved © 2023 `}
                </p>
                <p>
                Built with Next.js and Tailwind CSS,
                <br/>deployed with Vercel.
                </p>
              </div>
              <div className='animate-pulse  hover:text-[#3BBA9C] text-[#979797]'>
                <Link
                  href='https://tic-tac-toe-rho.vercel.app/'
                  target='_blank'
                  data-tooltip-id="play"
                  data-tooltip-content="play"
                  data-tooltip-place="top"
                  >
                    <Tooltip id="play" arrowColor='#707070' style={{ backgroundColor: "#707070", color: "white" }}/>
                  <TbTicTac size={40}/>
                </Link> 
              </div>
            </div>
            
          </footer>
        </main>
      </div>
    </div>
   
  )
}
