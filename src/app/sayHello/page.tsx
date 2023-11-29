'use client'

import { SyntheticEvent, useRef, useState } from "react";
import { SubmitButton } from "./submitButton"
import {SubmitHandler, useForm} from 'react-hook-form';
import { MdWavingHand } from "react-icons/md";
import './form.css';

type FormValues = {
    name: string,
    email: string,
    story: string
  }
  

export default function Page () {
    const {register, handleSubmit} = useForm<FormValues>();

    const onSubmit:SubmitHandler<FormValues> = (data) => {
        alert(JSON.stringify(data));
    }


    return (
        <div className="flex flex-col justify-center items-center max-w-4xl w-full px-10 pt-6 pb-8 shadow-sm bg-slate-100">
            {/* <motion.div className="text-slate-800 m-10 px-40" 
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}>
                <MdWavingHand size={90} />
            </motion.div>
             */}
             {/* <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                Hello, Framer Motion!
            </motion.div> */}
        {/* <form action={create} method="post" className=" m-3 w-full"> */}
        <div className="text-center text-4xl font-semibold bg-clip-text ">Contact me</div>
        <form className="m-3 w-full pt-8 " onSubmit={handleSubmit(onSubmit)}> 
            <div className="flex flex-col mx-5 mt-8 h-10 relative ">
                <label htmlFor="name">Enter your name: </label>
                <input 
                type="text" 
                placeholder='Name' 
                className='border-b-4 bg-inherit'
                {...register("name")} 
                // ref={name}
                required />
            </div>
            <div className="flex flex-col mx-5 mt-8 h-10 relative">
                <label htmlFor="email">Enter your email: </label>
                <input 
                type="email"  
                {...register('email')}
                // ref={email}
                placeholder="Email" 
                className='border-2 border-r-2' 
                required />
            </div>
            <div className="flex flex-col mx-5 mt-8 h-20 relative">
                <label htmlFor="text">Enter your message: </label>
                <textarea 
                id="story"
                {...register('story')}  
                // ref={text}
                placeholder="Message" 
                className='border-2 border-r-2' 
                required />
            </div>
            <div className='flex flex-col justify-start items-start m-3 my-10' >
                {/* <SubmitButton onSend={handleSend}/> */}
                {/* <button type="button" className="button" onClick={handleSend}>Send</button> */}
                <input type='submit' value='submit'/>
            </div>      
        </form>
        </div>
    )
};