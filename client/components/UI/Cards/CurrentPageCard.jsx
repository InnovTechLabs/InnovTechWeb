import React from 'react'

export default function CurrentPageCard({text, parent, child}) {
  return (
    <>
    <div className='flex-col  [box-shadow:5_5_0_0#120A21] bg-purple text-white p-7 space-y-8'>
        <p className='text-5xl underline font-manrope'>{text}</p>
        <div className='flex flex-row justify-around font-semibold'>
            <p>{parent}</p>
            <p>&gt;</p>
            <p>{child}</p>
        </div>
    </div>
    </>
  )
}
