import React from 'react'

export default function AnimateButtonTertiary({text}) {
  return (
    <>
    <div className='bg-yellow text-black [box-shadow:5px_5px_0_0_#120A21] px-10 py-3 transition-all duration-700 ease-in-out hover:bg-black hover:text-white hover:[box-shadow:10px_10px_0_0_#FFD80D]'>
        <span>{text}</span>
    </div>
    </>
  )
}
