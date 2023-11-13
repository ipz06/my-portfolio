import { Voces } from 'next/font/google'
import Image from 'next/image'
import Voice from './voice/page';
import { navMenu } from './ui/navMenu';


export default function Home() {
  return (
    <div className='flex w-full '>
      <div className='flex flex-row gap-4 justify-between w-full min-h-screen'>
        <aside className='flex flex-col py-5 px-20 w-full bg-slate-600'>
          <div id='extra' className='flex flex-row justify-start gap-10 px-20 py-10'>
            <button>Dark/Light Mode</button>
            <button>say hello</button>
          </div>
          <div className='flex flex-col justify-center px-20'>
            <Image 
            className='py-1'
            src='/profile.jpg'
            width={150}
            height={50}
            alt='Profile image'/>
          
          
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl py-1">
              <a>Ivanka Zlateva</a>
            </h1>
            <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl py-1">
              Front End Developer
            </h2>
            <span className='max-w-xs leading-normal text-slate-400 py-1'>
              I build accessible, inclusive products and digital experiences for the web.
            </span>
            </div>
            <nav className='nav hidden lg:block mx-20'>
              <ul className='mt-16 w-max'>
                {navMenu.map(el => <li key={el.ref}><a className='group flex items-center py-3 active' href={el.ref}>
                    <span className='nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none' >
                    </span>
                    <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                      {el.name}
                    </span>
                  </a></li>)}
              </ul>
            </nav>
        </aside>
        <main className="flex flex-col py-5 px-20 bg-slate-900 w-full">
          <Voice/>
        </main>
      </div>
    </div>
   
  )
}
