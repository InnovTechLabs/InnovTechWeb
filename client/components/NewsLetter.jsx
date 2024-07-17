import React from 'react'
import Image from 'next/image'
import newsLetter from "@/public/assets/images/img-box/newsletter-1.png"
import ring from "@/public/assets/images/mark/mark-news-1.png"
import star from "@/public/assets/images/mark/mark-news-2.png"
import triangle from "@/public/assets/images/mark/mark-news-3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import StaticButtonSecondary from '@/components/UI/Buttons/StaticButtonSecondary'
import AnimateButtonSecondary from './UI/Buttons/AnimateButtonSecondary'
import imageStyle from "@/public/styles/imageanimate.module.css"

export default function NewsLetter() {
  return (
    <>
    <div className='flex flex-row items-center justify-around bg-purple [box-shadow:5_5_0_0]'>
        <div className='flex flex-col'>
            <StaticButtonSecondary text={"Our NewsLetter"}/>
            <p>Send Your Email To Updates</p>
            
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className={` absolute ${imageStyle['move-left-to-right-pulse']}`}>
                <Image
                src={ring}
                alt='ring'
                width={500}
                />
            </div>
            <div className={`${imageStyle['move-left-to-right']}`}>
                <Image
                    src={newsLetter}
                    alt='newsletter'
                />  
            </div>
        </div>
    </div>
    </>
  )
}
