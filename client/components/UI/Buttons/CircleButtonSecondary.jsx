import React from 'react'
import Image from 'next/image'
import rightarrow from '@/public/assets/images/icon/arrowright.svg'

export default function CircleButtonSecondary() {
  return (
    <div className='bg-white [box-shadow:5_5_0_0#FFD80D] rounded-full px-3 py-3 transition-all delay-50 ease-in-out hover:bg-yellow hover:[box-shadow:5_5_0_0#9664FF]'>
        <Image
        src={rightarrow}
        alt='rightarrow'
        width={26}
        />
    </div>
  )
}
