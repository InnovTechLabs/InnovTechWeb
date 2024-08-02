import React from 'react'

export default function CircleButtonRotate({number, bgColor, shadowColor, textColor}) {
  return (
    <>
    <div className = {`${bgColor} rounded-full p-5 ${textColor} [box-shadow:5_5_0_0${shadowColor}] transition-all delay-100 ease-in-out hover:[box-shadow:-1_-1_0_0] hover:-rotate-12 w-fit`}>
        <p className='text-3xl'>{number}</p>
    </div>
    </>
  )
}
