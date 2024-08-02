import React from 'react'
import Image from 'next/image'

import imgStyle from '@/public/styles/imageanimate.module.css';
import markinner from "@/public/assets/images/mark/mark-inner-page.png";

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsLetter from '@/components/NewsLetter'
import StaticButton from '@/components/UI/Buttons/StaticButton';
import AnimateButtonSecondary from '@/components/UI/Buttons/AnimateButtonSecondary';
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard'

import service1 from "@/public/assets/images/img-box/service-1.png"




export default function Services() {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col space-y-10 py-10 md:flex-row justify-around items-center px-10'>
        <div>
          <CurrentPageCard text={"Our Services"} parent={"Home"} child={"Services"} />
        </div>
        <div className={`${imgStyle['']}`}>
          <Image
            src={markinner}
            alt='markinner'
          />
        </div>
      </div>
      <div className='bg-white'>
        <div className='flex flex-col md:flex-row justify-center items-center space-x-10 mx-10 py-10'>
          <div className='flex justify-center w-full md:w-1/2'>
            <Image
              src={service1}
              alt='service1'
              width={500}
            />
          </div>
          <div className='flex flex-col w-full md:w-1/2 space-y-10'>
            <div>
              <StaticButton text={"What We Do"}/>
            </div>
            <h1 className='font-bold text-4xl'>Amazing Solutions For Digital Growth</h1>
            <p>Sit amet consectetur adipiscing elit mollis eget scelerisque nibh mattis nulla. Suspendisse euismod bibendum mi alique Dignissim neque viverra tempor enim proin tristique lectus cursus idesmey Accumsan praesent volu ornarey diam. Vitae malesuada faucibus habitasse et tempus another ways digital system</p>
            <div className='w-fit'>
              <AnimateButtonSecondary text={"Learn More Us"}/>
            </div>

          </div>

        </div>
        <NewsLetter/>
        <Footer/>
      </div>
    </>
  )
}
