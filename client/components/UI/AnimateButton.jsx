import React from 'react'

export default function AnimateButton({text}) {
  return (
    <>
    <button className='bg-purple px-10 py-3 [box-shadow:5_5px_0_0_] transition-all duration-700 ease-in-out hover:[box-shadow:10px_10px_0_0_#FFD80D] hover:mx-3 hover:bg-black'>
        <span className='text-white'>{text}</span>
    </button>
    </>
  )
}
