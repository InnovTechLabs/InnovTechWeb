'use client'

import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Image from 'next/image'

import imgStyle from '@/public/styles/imageanimate.module.css';
import imgstyle from "@/public/styles/imageanimate.module.css"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsLetter from '@/components/NewsLetter'
import StaticButton from '@/components/UI/Buttons/StaticButton';
import AnimateButtonSecondary from '@/components/UI/Buttons/AnimateButtonSecondary';
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard'
import ServicesCard from '@/components/UI/Cards/ServicesCard';
import NumberCardSmall from '@/components/UI/Cards/NumberCardSmall';
import ListingCard from '@/components/UI/Cards/LisitingCard';

import service1 from "@/public/assets/images/img-box/service-1.png"
import service2 from "@/public/assets/images/img-box/step-2.png"
import markinner from "@/public/assets/images/mark/mark-inner-page.png";
import mark from "@/public/assets/images/mark/mark-step.png"
import rocket from "@/public/assets/images/icon/process-1.png"
import computer from "@/public/assets/images/icon/process-2.png"
import hand from "@/public/assets/images/icon/process-3.png"
import star from "@/public/assets/images/mark/mark-5.png"
import sun from "@/public/assets/images/mark/mark-6.png"
import clientIcon from "@/public/assets/images/icon/client.svg"
import accomplishedIcon from "@/public/assets/images/icon/accomplished.svg"
import earthIcon from "@/public/assets/images/icon/earth.svg"
import trophyIcon from "@/public/assets/images/icon/trophy.svg"

export default function Service({params} : {params : {service : string}}) {
  const detailName = params.service.replace("-", " ")
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
        <div className='text-center space-y-10 py-24'>
          <div>
            <StaticButton text={"Working Process"}/>
          </div>
          <div>
            <p className='text-5xl font-bold'>Foundations of 
              <span className='capitalize'> {detailName} </span>
            to Complete Our Business Missions</p>
          </div>
          <div className='flex flex-col-reverse lg:flex-col justify-center items-center py-24'>
              <div className='flex flex-col justify-center items-center lg:flex-row lg:mt-40 xl:mt-70 xl:mx-24 2xl:mx-72 space-y-10 lg:absolute z-10'>
                  <div className={`flex flex-col justify-center items-center group lg:mx-12  mt-24  ${imgStyle["group-hover-flip-vertical-half-horizontal"]} space-y-5 `}>
                    <div className={`outline outline-1 rounded-full p-5 bg-cream shadow-2xl shadow-darkgray relative z-20`}>
                      <Image
                        src={rocket}
                        alt="rocket"
                        className={imgStyle["flip-vertical-half-horizontal"]}
                      />
                    </div>
                    <div className="flex flex-col justify-center rounded-xl items-center transition-all outline-none group-hover:outline group-hover:outline-1 group-hover:outline-purple group-hover:duration-300 py-10 px-4 space-y-5 shadow-2xl shadow-extralightpurple relative z-20">
                      <p className="text-purple">STEP 01</p>
                      <h1 className="text-xl font-bold">Perform a Complete <span className="capitalize">{detailName}</span> and Content Audit</h1>
                      <p>Sit amet consect adipiscing nec tortor nec aenean</p>
                    </div>
                  </div>

                  <div className={`flex flex-col justify-center items-center group lg:mx-12 ${imgStyle["group-hover-flip-vertical-half-horizontal"]} space-y-5`}>
                    <div className={`outline outline-1 rounded-full p-5 bg-cream shadow-2xl shadow-darkgray`}>
                      <Image
                        src={computer}
                        alt="rocket"
                        className={imgStyle["flip-vertical-half-horizontal"]}
                      />
                    </div>
                    <div className="flex flex-col justify-center rounded-xl items-centertransition-all outline-none group-hover:outline group-hover:outline-1 group-hover:outline-purple group-hover:duration-300 py-10 px-4 space-y-5 shadow-2xl shadow-extralightpurple relative z-20">
                      <p className="text-purple">STEP 02</p>
                      <h1 className="text-xl font-bold">Perform a Complete <span className="capitalize">{detailName}</span> and Content Audit</h1>
                      <p>Sit amet consect adipiscing nec tortor nec aenean</p>
                    </div>
                  </div>

                  <div className={`flex flex-col justify-center items-center group lg:mx-12 ${imgStyle["group-hover-flip-vertical-half-horizontal"]} space-y-5`}>
                    <div className={`outline outline-1 rounded-full p-5 bg-cream shadow-2xl shadow-darkgray`}>
                      <Image
                        src={hand}
                        alt="rocket"
                        className={imgStyle["flip-vertical-half-horizontal"]}
                      />
                    </div>
                    <div className="flex flex-col justify-center rounded-xl items-center transition-all outline-none group-hover:outline group-hover:outline-1 group-hover:outline-purple group-hover:duration-300 py-10 px-4 space-y-5 shadow-2xl shadow-extralightpurple relative z-20">
                      <p className="text-purple">STEP 03</p>
                      <h1 className="text-xl font-bold">Perform a Complete <span className="capitalize">{detailName}</span> and Content Audit</h1>
                      <p>Sit amet consect adipiscing nec tortor nec aenean</p>
                    </div>
                  </div>

              </div>
              <div className='hidden lg:flex lg:justify-center lg:items-center lg:z-0'>
                <Image
                    src={mark}
                    alt='mark'
                    />
              </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
