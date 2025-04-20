'use client'

// import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from "../actions"
import { useRef, useState } from "react"
// import {SubmitHandler, useForm} from 'react-hook-form';
// import { MdWavingHand } from "react-icons/md";
import './form.css';
// import useInput from '../hooks/use-input';
import { useForm, ValidationError } from '@formspree/react'; 
import { useRouter } from 'next/navigation'

type FormValues = {
    name: string,
    email: string,
    story: string
  }
  

export default function Page () {

    // const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const router = useRouter();

    const [state, handleSubmit] = useForm("mleyqjag");
    if (state.succeeded) {
        return (
            <div className="flex flex-col items-center">
                <p className="text-slate-200">Thanks for writing me!</p>
                <button className="text-slate-200 transition duration-150 ease-out hover:ease-in hover:font-bold" onClick={() => router.push('/')}>BACK</button>

            </div>
            
        )
        
    }
    // const {register, handleSubmit} = useForm<FormValues>();

    // async function handleCaptchaSubmission(token: string | null) {
    //     // Server function to verify captcha
    //     await verifyCaptcha(token)
    //       .then(() => setIsVerified(true))
    //       .catch(() => setIsVerified(false))
    //   };

    return (
        <div className="container">
        <div className="text tracking-widest">Write me</div>
        <form onSubmit={handleSubmit}> 
            <div className="form-row">
                <div className="input-data">
                    <input 
                    type="text"  
                    id='name'
                    name="Name" 
                    required />
                    <div className="underline"></div>
                    <label htmlFor="name" className="text-[#1E1F24]">Enter your name: </label>                   
                </div>
            </div>
            <div className="form-row">
                <div className="input-data" >
                    <input 
                    type="email"  
                    id='email'
                    name='Email'
                    required />
                    <div className="underline"></div>
                    <label htmlFor="email">Enter your email: 
                    </label>
                    {/* {emailHasError && <p className="text-[#b40e0e] text-xs">Email must contains @ and a part following it! Please enter valid email!</p>} */}
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>   
            </div>
            <div className="form-row">
                <div className="input-data textarea" >  
                    <textarea 
                    // id="story"
                    id="message"
                    name="message"
                    // {...register('story')}  
                    rows={8}
                    cols={80}
                    required>
                    </textarea>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    /> 
                    <br />
                    <div className="underline"></div>
                    <label htmlFor="text">Write your message: </label>
                    <br />
                </div>
                
            </div>
            {/* <div className='form-row'>
                <div className="input-data"> 
                    <ReCAPTCHA
                        sitekey="6LeX1CwpAAAAANPae8EO93Zoaypi7UwbI_1mzazY"
                        ref={recaptchaRef}
                        onChange={handleCaptchaSubmission}
                    />
                </div>
            </div> */}
            <div className='form-row submit-btn'>
            <div className="input-data">   
                <div className="inner"></div>
                <input type='submit' value='submit' disabled={state.submitting && !isVerified} />
                </div>
            </div>      
        </form>
        </div>
    )
};