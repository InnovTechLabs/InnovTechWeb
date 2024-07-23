import React from 'react'
import Image from 'next/image'

export default function CircleButtonTertiary({image}) {
  return (
    <div className='bg-purple [box-shadow:5_5_0_0#FFD80D] rounded-full w-fit p-4 transition-all ease-in-out duration-150 hover:[box-shadow:-5_-5_0_0#FFD80D]'>
        <Image
            src={image}
            alt='image'
        />
    </div>
  )
}
