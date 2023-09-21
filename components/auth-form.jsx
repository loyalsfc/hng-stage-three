'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Input, Password } from './form-components/inputs'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function AuthForm() {
    const [formData, setFormData] = useState({email: "", password: ""})
    const [error, setError] = useState({errorNote: "", errorShown: false})
    const router = useRouter()
    const supabase = createClientComponentClient();


    const handleChange = (e) =>{
        const {id, value} = e.target;
        setError({...error, errorShown: false})
        setFormData({...formData, [id]: value});
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        if(formData.email === "" ||  formData.password === ""){
            setError({
                errorNote: "Email or password can not be empty",
                errorShown: true
            })
            return;
        }
        const {data, error} = await supabase.auth.signInWithPassword(formData)
        if(error){
            setError({
                errorNote: error.message,
                errorShown: true
            })
        }
        console.log(data, error)
        router.refresh()
    }

    return (
        <form action="" className='flex flex-col gap-6 w-full max-w-sm' onSubmit={handleSignIn}>
            {error.errorShown && <p className='mt-8 text-center text-red-500'>{error.errorNote}</p>}
            <Input id='email' type='email' value={formData.email} handleChange={handleChange}/>
            <Password id='password' value={formData.password} handleChange={handleChange}/>
            <button className="button bg-gray-900 rounded-[80px] py-2.5 px-8 font-semibold text-sm transition-all text-white ml-auto block">Login</button>
        </form>
    )
}

