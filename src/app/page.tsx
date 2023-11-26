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


export default function Home() {

  return (
    <div className='flex w-full '>
      <div className='flex flex-row gap-4 justify-between w-full min-h-screen bg-[#1E1F24]'>
        <header className='flex flex-col w-full'>
        <aside className='lg:sticky lg:top-0 lg:flex lg:flex-col lg:py-5 lg:px-20 lg:w-full bg-[#1E1F24]'>
          <div className='flex flex-col justify-center px-20'>
            <Image 
            className='py-10'
            src='/profile.JPG'
            width={200}
            height={100}
            alt='Profile image'/>
    
            <h1 className="text-4xl font-bold tracking-tight text-[#707070] sm:text-5xl py-1">
              <span><a>Ivanka Zlateva</a></span>
            </h1>
            <span>
              <h2 className="text-lg font-medium tracking-tight text-[#3BBA9C] sm:text-xl py-1">
                  Front End Developer<span className="text-lg font-medium tracking-tight text-[#707070] sm:text-xl py-1"> | Architect</span>
              </h2>
              
            </span>
            
            <span className='flex flex-row justify-start justify-items-center items-center my-2 gap-5 py-1 text-[#707070]'>
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
              
            </span>
            </div>
            <nav className='nav hidden lg:block mx-20'>
              <ul className='my-5 w-max'>
                {navMenu.map(el => <li key={el.ref}><a className='group flex items-center py-3 active' href={el.ref}>
                    <span className='nav-indicator mr-4 h-px w-8 bg-[#707070] transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none' >
                    </span>
                    <span className='nav-text text-xs font-bold uppercase tracking-widest text-[#707070] group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                      {el.name}
                    </span>
                  </a></li>)}
              </ul>
            </nav>
        </aside>
        </header>
        <main className="flex flex-col py-5 px-20 bg-[#1E1F24] w-full">
          <div id='extra' className='flex flex-row justify-start gap-10 px-20 py-10 text-[#707070] hover:text-[#3BBA9C]'>
            {/* <button>Dark/Light Mode</button> */}
            <Link
            href='https://tic-tac-toe-rho.vercel.app/'
            className='hover:animate-spin'>
              <TbTicTac size={30}/>
            </Link>
            
            <Link 
            href='/sayHello'
            className='text-slate-100'
            >
              <p>Say Hello</p>
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
