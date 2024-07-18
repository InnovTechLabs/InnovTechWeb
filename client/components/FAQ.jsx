'use client'
import React, {useState} from 'react'
import { FAQs } from "@/static/FAQs"
import CircleButton from "@/components/UI/Buttons/CircleButton"

export default function FAQ() {
    const [toggleQuestion, setToggleQuestion] = useState(0)
    const handleToggle = (id) => {
        setToggleQuestion(toggleQuestion === id? null : id)
    }
    return (
        <>
            {FAQs.map((faq, index) => (
            <div key={index} >
                <div className='flex-col mx-10 sm:md-16 md:mx-32 lg:mx-64 py-5 justify-between'>
                    <div className='bg-white p-4 space-y-5 [box-shadow:5_5_0_0#120A21] px-10'>
                        <div className='flex justify-between'>
                            <p className='font-bold font-manrope text-2xl'>{faq.question}</p>
                            <button onClick={() => handleToggle(faq.id)}>
                                <CircleButton text={"+"}/>
                            </button>
                        </div>
                        {toggleQuestion === faq.id?
                        (<div>
                            <p className='font-manrope text-xl'>{faq.answer}</p>
                        </div>) : 
                        (null)}
                        
                    </div>
                </div>
            </div>
            ))}
    </>
  )
}
