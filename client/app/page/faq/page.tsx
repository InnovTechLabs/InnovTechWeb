import React from 'react'
import Image from 'next/image'

import Navbar from '@/components/Navbar'
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard'
import StaticButton from '@/components/UI/Buttons/StaticButton'
import InputBox from '@/components/UI/InputBox/InputBox'
import TextArea from '@/components/UI/InputBox/TextArea'
import AnimateButtonTertiary from '@/components/UI/Buttons/AnimateButtonTertiary'

import FAQ from '@/components/FAQ'

import { technologies } from '@/static/Technologies'

import markinner from "@/public/assets/images/mark/mark-inner-page.png"

import imgStyle from "@/public/styles/speechbubble.module.css"
import NewsLetter from '@/components/NewsLetter'
import Footer from '@/components/Footer'

export default function faq() {
  return (
  <>
  <Navbar/>
  <div className='flex flex-col space-y-10 py-10 md:flex-row justify-around items-center px-10'>
      <div>
          <CurrentPageCard text={"Our FAQ"} parent={"Home"} child={"FAQ"}/>
      </div>
      <div className={`${imgStyle['']}`}>
          <Image
              src={markinner}
              alt = 'markinner'
          />
      </div>
    </div>
    <div className='bg-white py-24 space-y-24'>
      <div>
        <FAQ bgColor={"bg-cream"}/>
      </div>
      <div className='bg-white flex-col justify-center items-center p-24 mx-10 md:mx-32 text-center space-y-10 outline outline-1 [box-shadow:5_5_0_0]'>
            <StaticButton text={"Get In Touch"} />
            <p>Have Any Question On Mind! Send Us Message</p>
            <div className='flex flex-col justify-center space-y-5 md:space-y-0 md:flex-row   hover:text-white space-x-0 md:space-x-10'>
                <InputBox type={"text"} placeholder={"Full Name"}/>
                <InputBox type={"text"} placeholder={"Phonenumber"}/>
                <InputBox type={"email"} placeholder={"Email"}/>
            </div>
            <TextArea placeholder={"Write Message"} rows={10}/>
            <div className='w-fit'>
                <AnimateButtonTertiary text={"Send Us Message"}/>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>
    </div>
  </>
  )
}
