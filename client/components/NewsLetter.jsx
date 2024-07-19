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

export default function NewsLetter() {
  return (
    <>
    <div className='flex flex-col-reverse lg:flex-row py-16 space-y-14 items-center justify-around bg-purple [box-shadow:10_10_0_0] sm:mx-10 mx-2 '>
        <div className='flex-col space-y-52 w-10'>
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
                <StaticButtonSecondary text={"Our NewsLetter"}/>
            </div>
            <p className='text-white text-5xl font-manrope font-semibold'>Send Your Email To Get Updates</p>
            <div class="relative flex items-center h-20"> 
                <div class="absolute top-1/2 transform -translate-y-1/2 left-5 text-darkgray">
                    <FontAwesomeIcon icon={faMessage} size='xl'/>
                </div>
                <input type="text" class="h-20 pl-16 focus:outline-none w-full" placeholder="Enter Email Address"/>
                <div class="absolute top-1/2 transform -translate-y-1/2 right-3">
                    <button>
                        <AnimateButtonSecondary text={"Send"}/>  
                    </button>
                </div>
            </div>
            
        </div>

        <div className='flex flex-col justify-center items-center'>
            <div className={`w-fit absolute ${imageStyle['move-left-to-right-pulse']}`}>
                <Image
                src={ring}
                alt='ring'
                className=' w-[300] md:w-[500]'
                />
            </div>
            <div className={` ${imageStyle['move-left-to-right']}`}>
                <Image
                    src={newsLetter}
                    alt='newsletter'
                    className=' w-[300] md:w-[500]'
                />  
            </div>
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
