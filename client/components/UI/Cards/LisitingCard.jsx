import React from 'react'
import CircleButtonRotate from "@/components/UI/Buttons/CircleButtonRotate"

export default function LisitingCard({number, cardColor, text, bgColor, textColor,  shadowColor }) {
  return (
    <>
        <div className={`${cardColor} flex-col group`}>
            <div className='px-14 py-14 space-y-8'>
                <CircleButtonRotate number={number} bgColor={bgColor} textColor={textColor} shadowColor={shadowColor}/>
                <div className=' w-84'>
                    <p className=' font-manrope font-semibold text-3xl'>{text}</p>
                </div>
            </div>
        </div>
    </>
  )
}
