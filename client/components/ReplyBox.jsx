import React from 'react'
import InputBox from "../components/UI/InputBox/InputBox"
import TextArea from "../components/UI/InputBox/TextArea"
import AnimateButtonSecondary from "../components/UI/Buttons/AnimateButtonSecondary"

export default function ReplyBox() {
  return (
    <>
    <div className='flex flex-col outline outline-1 p-5 space-y-3'>
        <p>Leave A Reply</p>
        <p>Feel free to Send you valuable feedback</p>
        <div className='flex flex-row space-x-5 '>
            <InputBox type={"text"} placeholder={"Your Name"}/>
            <InputBox type={"email"} placeholder={"Email Address"}/>
        </div>
        <div>
            <TextArea placeholder={"Comment"} rows={10}/>
        </div>
        <div className='w-fit'>
            <AnimateButtonSecondary text={"Send Reply"}/>
        </div>
    </div>

    </>
  )
}
