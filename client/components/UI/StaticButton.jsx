import React from 'react'

export default function StaticButton({text}) {
  return (
    <button
        className='capitalize px-5 py-2 font-semibold bg-purple text-white [box-shadow:5px_5px_0_0_#010C2A] rounded-md'>
        {text}
    </button>
  )
}
