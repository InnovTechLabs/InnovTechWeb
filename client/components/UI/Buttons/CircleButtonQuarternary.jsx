import React from 'react'
import Image from 'next/image'

export default function CircleButtonQuarternary({image}) {
  return (
    <div className='bg-purple [box-shadow:2_5_0_0#120A21] rounded-full w-fit p-4 transition-all ease-in-out duration-300 hover:[box-shadow:0_0_0_0#FFD80D]'>
        <Image
            src={image}
            alt='image'
        />
    </div>
  )
}
