'use client'
import React, { useState } from 'react'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import TopSlider from "@/components/TopSlider"
import NumberCard from "@/components/UI/NumberCard"
import { NumberCardInfo } from '@/static/NumberCardInfo'
import Video from "@/components/UI/Video"

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
      <Footer />
    </>
  )
}
