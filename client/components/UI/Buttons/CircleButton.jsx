import React from 'react'

export default function CircleButton({text}) {
  return (
    <>
    
    <div className='bg-yellow [box-shadow:-5_-5_0_0#9664FF] rounded-full w-fit px-6 py-4'>
        <p className='text-4xl text-black'>{text}</p>
    </div>
    </>
  )
}
