import React from 'react'

export default function CircleButton({text}) {
  return (
    <>
    <div className='bg-yellow [box-shadow:-5_-5_0_0#9664FF] rounded-full w-fit px-4 py-2'>
        <p className='text-4xl text-black'>{text}</p>
    </div>
    </>
  )
}
