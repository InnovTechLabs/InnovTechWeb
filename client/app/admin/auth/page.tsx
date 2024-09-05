'use client'
import AnimateButton from '@/components/UI/Buttons/AnimateButton'
import InputBox from '@/components/UI/InputBox/InputBox'
import React, { useState } from 'react'

export default function Auth() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleAdminLogin = (e) => {
        e.preventDefault()
        
    }

    return (
        <>
            <div className='bg-black h-screen w-full'>
                <div class="flex flex-col justify-center items-center h-screen space-y-10">
                    <div>
                        <InputBox type={"text"} placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} value={username}/>
                    </div>
                    <div>
                        <InputBox type={"password"} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div>
                        <AnimateButton text={"Login"}/>
                    </div>
                </div> 
            </div>
        </>
    )
}
