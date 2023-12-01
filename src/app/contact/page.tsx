import {FaHome} from 'react-icons/fa';
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Contact() {
return (
    <section id='contact'>
        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className='text-[#3BBA9C] text-lg font-bold tracking-widest lg:sr-only'>CONTACT</h2>
        </div>
        <h1 className="text-3xl font-bold tracking-widest text-[#3BBA9C] py-5 lg:pb-5 sr-only sm:not-sr-only">CONTACT</h1>
        <div className='flex flex-row justify-between m-1 p-3 gap-4 lg:text-base sm:text-sm sm:tracking-tighter lg:tracking-normal'>
        <div className='text-slate-100'>
            <div className='p-2'>
                <FaHome />
            </div>
            
            <p>Sofia</p>
        </div>
        <div className='text-slate-100 '>
            <div className='p-2 pl-14'>
                <IoIosPhonePortrait/>
            </div>
            
            <p>+359885293906</p>
        </div>
        <div className='text-slate-100'>
            <div className='p-2 pl-16'>
                <MdEmail />
            </div> 
            <p>it.vania.9@gmail.com</p>
        </div>      
    </div>
    </section>
    
)
};