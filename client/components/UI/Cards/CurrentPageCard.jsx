import React from 'react'

export default function CurrentPageCard({text, parent, child}) {
  return (
    <>
    <div className='flex-col  [box-shadow:10_10_0_0#120A21] bg-purple text-white px-24 py-10 space-y-8'>
        <p className='text-5xl underline font-manrope font-bold'>{text}</p>
        <div className='flex flex-row justify-around font-semibold'>
            <p>{parent}</p>
            <p>&gt;</p>
            <p>{child}</p>
        </div>
    </div>
    </>
  )
}
