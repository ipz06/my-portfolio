'use client'

import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from "../actions"
import { useRef, useState } from "react"
// import {SubmitHandler, useForm} from 'react-hook-form';
// import { MdWavingHand } from "react-icons/md";
import './form.css';
import useInput from '../hooks/use-input';
import { useForm, ValidationError } from '@formspree/react';

type FormValues = {
    name: string,
    email: string,
    story: string
  }
  

export default function Page () {

    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerified, setIsVerified] = useState<boolean>(false);

    const [state, handleSubmit] = useForm("mleyqjag");
    if (state.succeeded) {
        return <p className="text-slate-200">Thanks for joining!</p>;
    }
    // const {register, handleSubmit} = useForm<FormValues>();

    async function handleCaptchaSubmission(token: string | null) {
        // Server function to verify captcha
        await verifyCaptcha(token)
          .then(() => setIsVerified(true))
          .catch(() => setIsVerified(false))
      };



    // const {
    //     value: enteredName,
    //     isValid: nameIsValid,
    //     hasError: nameHasError,
    //     valueChangeHandler: nameChangeHandler,
    //     inputBlurHandler: nameBlurHandler,
    //     reset: nameReset,
    //   } = useInput((value:string):boolean => value.trim() !== '');

    // const {
    // value: enteredEmail,
    // isValid: emailIsValid,
    // hasError: emailHasError,
    // valueChangeHandler: emailChangeHandler,
    // inputBlurHandler: emailBlurHandler,
    // reset: emailReset,
    // } = useInput((value:string):boolean => {
    //     if (value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    //         return true;
    //     } else {
    //         return false;
    //     }   
    // });

    // const {
    //     value: enteredStory,
    //     isValid: storyIsValid,
    //     hasError: storyHasError,
    //     areaChangeHandler: areaChangeHandler,
    //     // inputBlurHandler: storyBlurHandler,
    //     reset: storyReset,
    //   } = useInput((value:string):boolean => value.trim() !== '');
    

//     let formIsValid;
//   if (nameIsValid  && emailIsValid && storyIsValid) {
//     formIsValid = true;
//   }
//   const onSubmit = (event: React.FormEvent): void =>{ 
//     event.preventDefault();
//     // alert(JSON.stringify(data));
//     console.log('name:' + enteredName);
//     console.log('email: ' + enteredEmail);
//     console.log('story: ' + enteredStory)

//     nameReset();
//     emailReset();
//     storyReset();

//   }

//   const nameInputId = nameHasError ? 'invalid' : '';
//   const emailInputId = emailHasError ? 'invalid' : '';
//   const storyInputId = storyHasError ? 'invalid' : '';

    return (
        <div className="container">
        <div className="text tracking-widest">Write me</div>
        <form onSubmit={handleSubmit}> 
            <div className="form-row">
                <div className="input-data">
                    <input 
                    type="text"  
                    // {...register("name")}
                    // onChange={nameChangeHandler}
                    // onBlur={nameBlurHandler}
                    // value={enteredName}
                    id='name'
                    name="Name" 
                    required />
                    <div className="underline"></div>
                    <label htmlFor="name" className="text-[#1E1F24]">Enter your name: </label>
                    {/* {nameHasError && <p className="text-[#b40e0e] text-xs">Name must not be empty.</p>} */}
                   
                </div>
            </div>
            <div className="form-row">
                <div className="input-data" >
                    <input 
                    type="email"  
                    id='email'
                    name='Email'
                    // {...register('email')}
                    // onChange={emailChangeHandler}
                    // onBlur={emailBlurHandler}
                    // value={enteredEmail} 
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
                    // onInput={areaChangeHandler}
                    // onChange={storyChangeHandler}
                    // onBlur={storyBlurHandler}
                    // value={enteredStory}
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
            <div className='form-row'>
                <div className="input-data"> 
                    <ReCAPTCHA
                        sitekey="6LfuzSApAAAAAOygPIS3m916ifu8qKi3yrynjrqo"
                        ref={recaptchaRef}
                        onChange={handleCaptchaSubmission}
                    />
                </div>
            </div>
            <div className='form-row submit-btn'>
            <div className="input-data">   
                <div className="inner"></div>
                <input type='submit' value='submit' disabled={state.submitting} />
                </div>
            </div>      
        </form>
        </div>
    )
};