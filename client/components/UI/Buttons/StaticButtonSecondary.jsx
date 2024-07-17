import React from 'react'

export default function StaticButtonSecondary({text}) {
  return (
    <button
        className='capitalize px-5 py-2 font-semibold bg-white text-black [box-shadow:5px_5px_0_0_#010C2A] rounded-md'>
        {text}
    </button>
  )
}
