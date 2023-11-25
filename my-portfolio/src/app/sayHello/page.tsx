import { SubmitButton } from "./submitButton"
import { MdWavingHand } from "react-icons/md";
import { motion } from "framer-motion";


export default function Page () {

    // const formSubmissionHandler = () => {

    // }

    
    async function create(formData: FormData) {
        'use server'
     
        // mutate data
        // revalidate cache


      }

    return (
        <div className="flex-1 flex-col justify-center items-center px-96 ml-28 my-44">
            {/* <motion.div className="text-slate-800 m-10 px-40" 
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}>
                <MdWavingHand size={90} />
            </motion.div>
             */}
             <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                Hello, Framer Motion!
            </motion.div>
        <form action={create} method="post" className=" m-3 w-full">
            <div className="m-3">
                <label htmlFor="name">Enter your name: </label>
                <input type="text" name="name" placeholder='Name' className='border-2 border-r-2' required />
            </div>
            <div className="m-3">
                <label htmlFor="email">Enter your email: </label>
                <input type="email" name="email" id="email" placeholder="Email" className='border-2 border-r-2' required />
            </div>
            <div className="m-3">
                <label htmlFor="text">Enter your message: </label>
                <textarea id="story" name="story"  placeholder="Message" className='border-2 border-r-2' required />
            </div>
            <div className='m-10 px-24' >
                <SubmitButton/>
            </div>      
        </form>
        </div>
    )
};