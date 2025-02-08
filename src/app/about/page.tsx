'use client'
import Link from "next/link";
import { Tooltip } from "react-tooltip";

export default function About () {

    return (
        <section id='about' className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-[#3BBA9C] text-lg font-bold tracking-widest lg:sr-only">ABOUT</h2>
            </div>
            <div>
                <p className="mb-4 text-[#9f9f9f]">
                My journey into coding and web development began when I decided to create a web page for an architectural project.  
                This curiosity led me to learn JavaScript and graduate from Telerik Academy, where I gained hands-on experience 
                with various <a href='#skills'>technologies </a> 
                and collaborated on different practical projects as part of a team. 
                </p>
                <p className="my-16 text-[#9f9f9f]">
                As a former <Link 
                href='https://issuu.com/vaniatodorova6/docs/portfolio_ivanka_todorova' 
                target="_blank"
                className="text-slate-200 hover:text-[#3BBA9C]"
                data-tooltip-id="my-tooltip-arch"
                data-tooltip-content="Some student work"
                data-tooltip-place="top"
        
                >
                    <Tooltip id="my-tooltip-arch" arrowColor='#707070' style={{ backgroundColor: "#707070", color: "white" }}/>
                    architect </Link> 
                
                    I have a strong foundation in precision, problem-solving, and creative design. Transitioning into JavaScript development, 
                    I bring with me a keen eye for detail, project management skills, and the ability to conceptualize and execute complex ideas.
                </p>
                <p className="my-16 text-[#9f9f9f]">
                I am currently focused on crafting high-quality web applications while continuously expanding my knowledge in the field.  
                When I am not coding, you will find me staying active through sports, spending time with friends, or experimenting in the kitchen.  
                I also love taking on reading challenges on my   <Link 
                href='https://www.goodreads.com/'
                target="_blank" 
                className="text-slate-200 hover:text-[#3BBA9C] border-b-0 hover:border-b-2  hover:border-[#3BBA9C] transition-all"
                data-tooltip-id="my-tooltip-arch"
                data-tooltip-content="To my Goodreads profile"
                data-tooltip-place="bottom"
                 >
                    <Tooltip id="my-tooltip-good" arrowColor='#707070' style={{ backgroundColor: "#707070", color: "white" }}/>

                 Goodreads</Link> profile. 
                </p>
            </div>
                
                    
        </section>
    )
}