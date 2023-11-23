import {FaHome} from 'react-icons/fa';
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Contact() {
return (
    <div className='flex flex-row justify-between m-1 p-3'>
        <div className='text-slate-100'>
            <div className='p-2'>
                <FaHome />
            </div>
            
            <p>Sofia</p>
        </div>
        <div className='text-slate-100'>
            <div className='p-2 pl-14'>
                <IoIosPhonePortrait/>
            </div>
            
            <p>+359 885 29 39 06</p>
        </div>
        <div className='text-slate-100'>
            <div className='p-2 pl-16'>
                <MdEmail />
            </div> 
            <p>it.vania.9@gmail.com</p>
        </div>      
    </div>
)
};