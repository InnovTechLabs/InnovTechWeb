'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import TopSlider from "@/components/TopSlider"
import NewsLetter from "@/components/NewsLetter"
import NumberCard from "@/components/UI/Cards/NumberCard"
import AnimateButtonSecondary from '@/components/UI/Buttons/AnimateButtonSecondary'
import StaticButton from '@/components/UI/Buttons/StaticButton'
import ServicesCard from "@/components/UI/Cards/ServicesCard"
import Video from "@/components/Video"

import { NumberCardInfo } from '@/static/NumberCardInfo'
import { ServiceCardInfo } from '@/static/ServiceCardInfo'

import About1 from "@/public/assets/images/img-box/about-1.png"
import star from "@/public/assets/images/mark/mark-5.png"
import sun from "@/public/assets/images/mark/mark-6.png"

import imgstyle from "@/public/styles/imageanimate.module.css"

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false)

  const handleTogglePlay = (id : Number) => {
    setShowOverlay(!showOverlay)
    console.log(id)
  }

  return (
    <>
      <Navbar />
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-8">
          <div className="relative w-full h-full max-w-[80vw] max-h-[80vh] bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setShowOverlay(false)}
              className="absolute top-2 right-2 text-white text-4xl cursor-pointer z-10"
            >
              &times;
            </button>
            <Video />
          </div>
        </div>
      )}

      <TopSlider onVideoPlayClick={handleTogglePlay} />

      <div className='flex flex-col sm:flex-row justify-center items-center bg-black py-10 my-10'>
        <div className='p-10'>
          <NumberCard
            image={NumberCardInfo.client.image}
            text={NumberCardInfo.client.text}
            number={NumberCardInfo.client.number}
          />
        </div>
        <div className='p-10'>
          <NumberCard
            image={NumberCardInfo.accomplishment.image}
            text={NumberCardInfo.accomplishment.text}
            number={NumberCardInfo.accomplishment.number}
          />
        </div>
        <div className='p-10'>
          <NumberCard
            image={NumberCardInfo.affiliation.image}
            text={NumberCardInfo.affiliation.text}
            number={NumberCardInfo.affiliation.number}
          />
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-around items-center px-12 py-12'>
        <div className={`w-3/4 ${imgstyle['move-left-to-right']}`}>
            <Image
              src={About1}
              alt='about-img'
            />
        </div>
        <div className='flex flex-col md:w-1/2 space-y-10 md:px-20'>
        <div>
          <StaticButton
          text={"About Company"}
          />
        </div>
          <span className=' text-4xl font-semibold'>Transforming Visions Into Digital Reality</span>
          <p>At our web designing and digital marketing agencies, we are catalysts of innovation. With a passion for creativity and a pulse on digital trends, we craft immersive websites and execute strategic marketing, propelling businesses into the forefront of the online world. Join us on this digital journey!</p>
        <div className='cursor-pointer w-fit'>
          <AnimateButtonSecondary
          text={"Learn More Us"}
          />
        </div>
        </div>
      </div>

      <div className='bg-white flex flex-col justify-center items-center space-y-10 px-10 py-20 mx-12 [box-shadow:10_10_0_0] md:mx-24'>
        <div>
            <StaticButton
            text={"Services We Offer"}
            />
        </div>
        <div className='flex flex-row space-x-14 items-center'>
          <div className={`hidden lg:block ${imgstyle['move-bottom-to-top']}`}>
            <Image
              src={star}
              alt='start'
            />
          </div>
          <div className='text-center'>
            <span className='text-3xl font-bold'>Stay ahead in the digital race with our forward-thinking services.</span>
          </div>
          <div className={`hidden lg:block ${imgstyle['rotate-anticlockwise']}`}>
            <Image
              src={sun}
              alt='start'
            />
          </div>
        </div>

        <div className='space-y-5 md:flex-row lg:flex md:space-y-5 lg:space-x-5 items-center'>
          <div className='space-y-5 sm:flex md:space-x-5 lg:space-x-5 items-center'>
            <ServicesCard heading={ServiceCardInfo.seo.heading} description={ServiceCardInfo.seo.description} image={ServiceCardInfo.seo.image}/>
            <ServicesCard heading={ServiceCardInfo.email.heading} description={ServiceCardInfo.email.description} image={ServiceCardInfo.email.image}/>
          </div>
          <div className='space-y-5 sm:flex md:space-x-5 lg:space-x-5 items-center'>
            <ServicesCard heading={ServiceCardInfo.webDevelopment.heading} description={ServiceCardInfo.webDevelopment.description} image={ServiceCardInfo.webDevelopment.image}/>
            <ServicesCard heading={ServiceCardInfo.uiux.heading} description={ServiceCardInfo.uiux.description} image={ServiceCardInfo.uiux.image}/>
          </div>
        </div>   
      </div>
      <div className='flex flex-row justify-around py-10'>
        <div className='flex-col items-start space-y-5'>
          <StaticButton text={"Latest Works"}/>
          <p className='text-2xl font-semibold'>We&apos;ve Done Global Projects Take a Look</p>
        </div>
        <div>
          
        </div>

      </div>
      <NewsLetter/>
      

      <Footer />
    </>
  )
}
