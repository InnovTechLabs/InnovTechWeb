import React from 'react'
import Image from 'next/image'
import sampleImage from "@/public/assets/images/img-box/client-6.jpg"
import speechbubblestyle from "@/public/styles/speechbubble.module.css"

export default function SpeechBubble() {
  return (
    <>
    <div className='flex-col mx-10 space-y-5 p-4 w-fit'>
      <div>
        <div className='bg-white transition-all delay-150 hover:[box-shadow:-6_-6_0_0#9664FF] rounded-lg p-5'>
          <p>I would recommend innov for anyone trying to get the word out about their business. It has saved me so much time!</p>
        </div>
        <div class={`${speechbubblestyle['triangle']}`}>
        </div>
      </div>
      <div className='flex items-center mx-16 space-x-5'>
        <Image
          src={sampleImage}
          alt='sampleImage'
          className='rounded-full'
        />        
        <div className='flex flex-col'>
            <p className='text-white font-bold'>Somalia D. Silva</p>
            <p className='text-white font-semibold'>CEO & Founder</p>
          <div>

          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
