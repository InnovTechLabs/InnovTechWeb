import React from 'react'
import Image from 'next/image'
import sampleImage from "@/public/assets/images/img-box/client-6.jpg"
import speechbubblestyle from "@/public/styles/speechbubble.module.css"
import purplestar from "@/public/assets/images/mark/mark-testi-3.png"
import purpletriangle from "@/public/assets/images/mark/mark-testi-4.png"
import apostrophy from "@/public/assets/images/icon/apostrophy.svg"

export default function SpeechBubbleSecondary() {
  return (
    <>
    <div>
        <div className='flex flex-col  bg-white rounded-2xl outline outline-1 p-5 space-y-10'>
            <div className='flex flex-row justify-around items-center'>
                <div>
                    <Image
                        src={purplestar}
                        alt='purplestart'
                    />
                </div>
                <div className=' bg-yellow rounded-full [box-shadow:5_5_0_0#9664FF] px-4 py-5'>
                    <Image
                    src={apostrophy}
                    alt='apostrophy'
                    />
                </div>
                <div>
                    <Image
                        src={purpletriangle}
                        alt='purplestart'
                    />
                </div>

                </div>
                <p>On the other hand, we donounce with see righteous insignation and sidlike men whoy blinded by desire, that they cannot foresee</p>
                <div className='flex flex-row justify-center items-center space-x-5'>
                    <div>
                        <Image
                        src={sampleImage}
                        alt='sampleImage'
                        />
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='font-bold'>Rodney C. Gaton</p>
                        <p>CEO</p>
                    </div>
                </div>
            </div>
            <div className=' mr-96'>
        </div>
    </div>
    <div className={`${speechbubblestyle['triangle-outline']}`}>
    </div>
    </>
  )
}
