import React from 'react'

export default function PopluarTag({text}) {
  return (
    <>
    <div className='bg-cream cursor-pointer flex flex-row items-center justify-between py-4 px-2 [box-shadow:5_5_0_0#120A21] font-bold font-manrope transition-all duration-200 hover:bg-purple hover:text-white hover:[box-shadow:5_5_0_0#120A21]'>
        <p className='capitalize'>{text}</p>
    </div>
    </>
  )
}
