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
        <div className="container">
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
        <div className="text ">Contact me</div>
        <form  onSubmit={handleSubmit(onSubmit)}> 
            <div className="form-row">
                <div className="input-data">
                    <input 
                    type="text"  
                    {...register("name")} 
                    required />
                    <div className="underline"></div>
                    <label htmlFor="name">Enter your name: </label>
                </div>
            </div>
            <div className="form-row">
                <div className="input-data">
                    <input 
                    type="email"  
                    {...register('email')} 
                    required />
                    <div className="underline"></div>
                    <label htmlFor="email">Enter your email: 
                    </label>
                </div>   
            </div>
            <div className="form-row">
                <div className="input-data textarea">  
                    <textarea 
                    id="story"
                    {...register('story')}  
                    rows={8}
                    cols={80}
                     required>
                    </textarea> 
                    <br />
                    <div className="underline"></div>
                    <label htmlFor="text">Write your message: </label>
                    <br />
                </div>
                
            </div>
            <div className='form-row submit-btn'>
            <div className="input-data">
                <div className="inner"></div>
                {/* <SubmitButton onSend={handleSend}/> */}
                {/* <button type="button" className="button" onClick={handleSend}>Send</button> */}
                <input type='submit' value='submit'/>
                </div>
            </div>      
        </form>
        </div>
    )
};