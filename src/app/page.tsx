import { Voces } from 'next/font/google'
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



export default function Home() {

  return (
    <div className='flex w-full font-sans min-h-screen mx-auto max-w-screen-xl bg-[#1E1F24] px-6 md:px-12 lg:px-24 lg:py-0 md:py-10'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:w-1/2 lg:py-12'>
        <aside>
          <div className=''>
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
              <Link href='https://github.com/ipz06' className='hover:text-slate-200'>
                <AiFillGithub size={20} />
              </Link>
              <Link href='https://gitlab.com/ipz06' className='hover:text-slate-200'>
                <AiFillGitlab size={20}/>
              </Link>
              <Link href='https://www.linkedin.com/in/ivanka-zlateva-aa2258132/' className='hover:text-slate-200'>
                <AiFillLinkedin size={20}/>              
              </Link>
              <Link 
              href='https://drive.google.com/file/d/1mKDlZfxhnUJEi01zRsSfBHgCHNLSAIMQ/view?usp=sharing'
              >
                <h1 className='font-bold text-l hover:text-slate-200'>CV</h1>
              </Link> 
              
            </ul>
            </div>
            <nav className='nav hidden lg:block'>
              <ul className='my-5 w-max'>
                {navMenu.map(el => <li key={el.ref}><a className='group flex items-center py-3 active' href={el.ref}>
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
        <main className="pt-24 lg:w-1/2  bg-[#1E1F24] lg:py-20">
          <div id='extra' className='flex flex-row lg:justify-center sm:justify-start gap-10 lg:px-20 pb-10 text-[#707070]'>
            {/* <button>Dark/Light Mode</button> */}
            <Link
            href='https://tic-tac-toe-rho.vercel.app/'
            className='hover:animate-spin  hover:text-[#3BBA9C]'>
              <TbTicTac size={30}/>
            </Link>  
            <Link 
            href='/sayHello'
            className=' hover:text-[#3BBA9C]'
            >
              <BiMessageDetail size={30}/>
            </Link>
          </div>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Voice/>
          <Contact />
        </main>
      </div>
    </div>
   
  )
}
