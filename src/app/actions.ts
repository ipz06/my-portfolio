"use server"

import axios from "axios"

export async function verifyCaptcha(token: string | null) {
    try 
    {
        const res = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SITE_SECRET}&response=${token}`
        )
        console.log("RESULT:" + res)
        if (res.data.success) {
            
            return "success!"
        } else {
            throw new Error("Failed Captcha")
        }
    } catch (e) {
        console.log(e);
    }

}