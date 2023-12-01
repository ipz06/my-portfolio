import Link from "next/link";

export default function About () {
    return (
        <section id='about' className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-[#3BBA9C] text-lg font-bold tracking-widest lg:sr-only">ABOUT</h2>
            </div>
            <div>
                <p className="mb-4 text-[#707070]">
                My coding and Web development journey begun when I decided to try my hand at creating web page for architecture. 
                I started learning JavaScript and graduated Telerik Academy.  I was able to gain valuable experience with some <a href='#skills'>technologies </a> 
                and was happy to develop alongside my peers in teams 3 different practical projects. 
                </p>
                <p className="my-16 text-[#707070]">
                As a former architect with a passion for precision and creative problem-solving, 
                I am now embarking on an exciting journey into the world of JavaScript development. 
                My background in architecture has honed my attention to detail, project management skills, 
                and ability to envision and execute complex designs.
                </p>
                <p className="my-16 text-[#707070]">
                My main focus these days is building products in web development and continue learning. 
                When I am not at the computer, I am usually sporting,
                hanging out with friends, or cooking. And love doing reading 
                challenges at my <Link href='https://www.goodreads.com/' className="text-[#bebebe] hover:text-[#3BBA9C] ">goodreads</Link> profile. 
                </p>
            </div>
                
                    
        </section>
    )
}