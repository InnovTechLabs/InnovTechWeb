import React from 'react'

export default function AnimateButtonSecondary({text}) {
  return (
    <>
    <div className='bg-black [box-shadow:5px_5px_0_0_#FFD80D] px-10 py-3 transition-all duration-700 ease-in-out hover:bg-purple hover:[box-shadow:10px_10px_0_0_]'>
        <span className='text-white'>{text}</span>
    </div>
    </>
  )
}
