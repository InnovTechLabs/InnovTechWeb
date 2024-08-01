import React from 'react'
import Image from 'next/image'


export default function CircleLinkButton({image}) {
  return (
    <div className='bg-yellow text-black rounded-full px-3 py-3 transition-all delay-50 ease-in-out hover:bg-purple hover:[box-shadow:1_5_0_0#120A21]'>
      <Image 
        src={image}
        alt='image'
        width={15}
        className=''
      />
    </div>
  )
}
