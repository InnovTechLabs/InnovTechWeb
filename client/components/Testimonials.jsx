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
import AnimateButton from './UI/Buttons/AnimateButton'
import whitestar from "../public/assets/images/mark/mark-news-2.png"
import whitetraingle from "../public/assets/images/mark/mark-news-3.png"
import imgStyle from "../public/styles/imageanimate.module.css"
import SpeechBubble from './UI/SpeechBubble'

export default function Testimonials() {
  return (
<>
    <div className='flex flex-col lg:flex-row py-16 space-y-14 items-center justify-around bg-purple [box-shadow:10_10_0_0] sm:mx-10 mx-2 px-24 '>
        <div className='flex-col space-y-64 w-10'>
            <div className={`hidden lg:block ${imgStyle['rotate-anticlockwise']}`}>
                <Image
                src={whitestar}
                alt='whitestart'
                />
            </div>
            <div className={`hidden lg:block ${imgStyle['move-triangle']}`}>
                <Image
                    src={whitetraingle}
                    alt='whitetriangle'

                />
            </div>
        </div>

        <div className='flex flex-col px-4 space-y-12'>
            <div>
                <StaticButtonSecondary text={"Our Testimonials"}/>
            </div>
            <p className='text-white text-5xl font-bold'>What Our Clients Say About Us</p>
            
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center'>
            <SpeechBubble/>
            <SpeechBubble/>
        </div>

        <div className='flex-col space-y-52 w-10'>
            <div className={`hidden lg:block ${imgStyle['move-triangle']}`}>
                <Image
                    src={whitetraingle}
                    alt='whitetriangle'

                />
            </div>
            <div className={`hidden lg:block ${imgStyle['rotate-anticlockwise']}`}>
                <Image
                src={whitestar}
                alt='whitestart'
                />
            </div>
        </div>

    </div>
    </>
  )
}
