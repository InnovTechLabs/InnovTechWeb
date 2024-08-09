'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

import Preloader from "@/components/UI/Animation/Preloader"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import TopSlider from "@/components/TopSlider"
import NewsLetter from "@/components/NewsLetter"
import NumberCard from "@/components/UI/Cards/NumberCard"
import AnimateButtonSecondary from '@/components/UI/Buttons/AnimateButtonSecondary'
import StaticButton from '@/components/UI/Buttons/StaticButton'
import ServicesCard from "@/components/UI/Cards/ServicesCard"
import Video from "@/components/Video"
import ListingCard from "@/components/UI/Cards/LisitingCard"
import CompaniesSlider from "@/components/CompaniesSlider"
import SpeechBubble from "@/components/UI/SpeechBubble"
import BottomSlider from "@/components/BottomSlider"
import BlogSlider from "@/components/UI/BlogSlider"
import FAQ from "@/components/FAQ"

import { NumberCardInfo } from '@/static/NumberCardInfo'
import { ServiceCardInfo } from '@/static/ServiceCardInfo'
import { technologies } from '@/static/Technologies'
import generateSlug from '@/utils/slug'


import About1 from "@/public/assets/images/img-box/about-1.png"
import star from "@/public/assets/images/mark/mark-5.png"
import star2 from "@/public/assets/images/mark/mark-3.png"
import stars from "@/public/assets/images/mark/mark-2.png"
import discoball from "@/public/assets/images/mark/mark-4.png"
import sun from "@/public/assets/images/mark/mark-6.png"
import mikeperson from "@/public/assets/images/img-box/step.png"
import innovTechlogo from "@/public/assets/images/img-box/testi-6.jpg"
import palmtree from "@/public/assets/images/img-box/testi-1.png"
import shareIcon from "@/public/assets/images/img-box/testi-2.png"
import glowingStar from "@/public/assets/images/img-box/testi-3.png"
import oppo from "@/public/assets/images/img-box/testi-4.jpg"
import downwardThred from "@/public/assets/images/mark/mark-testi-5.png"
import circularthread from "@/public/assets/images/mark/mark-testi.png"
import mark7 from "@/public/assets/images/mark/mark-7.png"
import mark8 from "@/public/assets/images/mark/mark-8.png"
import mark9 from "@/public/assets/images/mark/mark-9.png"
import mark10 from "@/public/assets/images/mark/mark-10.png"

import imgstyle from "@/public/styles/imageanimate.module.css"

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false)
  const [categories, setCategories] = useState([])

  const handleTogglePlay = (id : Number) => {
    setShowOverlay(!showOverlay)
    console.log(id)
  }

  const fetchCategory = async() => {
    const response = await axios.get("http://localhost:5000/category/all-categories").then((result) => {
      setCategories(result.data)
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetchCategory()
  },[])

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
          <div className={`hidden md:block ${imgstyle['pulse']}`}>
            <Image
              src={stars}
              alt='stars'
            />
          </div>
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
          <div className='flex-col space-y-52'>
            <div className={`hidden md:block ${imgstyle['rotate-clockwise']}`}>
              <Image
                src={star2}
                alt='star2'
              />
            </div>
            <div className={`hidden md:block ${imgstyle['pulse']}`}>
              <Image
                  src={discoball}
                  alt='discoball'
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

          <div className='space-y-5 sm:flex-col md:flex-col lg:flex md:space-y-5 lg:space-x-5 items-center'>
            <div className='space-y-5 lg:flex  md:space-x-5 lg:space-x-5 items-center'>
                  {categories.slice(0,4).map((category) => (
                    <div key={category.id}>
                      <Link href = {`/services/${generateSlug(category.category_name)}`}>
                        <ServicesCard heading={category.category_name} description={category.category_description} image={category.category_image} />
                      </Link>
                    </div>
                  ))}
            </div>
          </div>   
        </div>

        <div className='flex flex-col justify-around py-10 space-y-10'>
          <div className='flex-col items-start space-y-5 px-10 md:px-52'>
            <StaticButton text={"Latest Works"}/>
            <p className='text-4xl font-semibold'>We&apos;ve Done Global Projects Take a Look</p>
          </div>
          <div>
          </div>
            <BottomSlider/>
        </div>


        <div className='flex flex-col md:flex-row justify-around py-5'>
          <div className='flex-col space-y-5 mx-10'>
            <div className='pl-16'>
              <ListingCard number={"01"} cardColor = {"bg-white"} bgColor={"bg-purple"} textColor={"text-white"} shadowColor={"#120A21"} text={"Creative Thinking and Originality"}/>
            </div>
            <div className='pr-16'>
              <ListingCard number={"02"} cardColor = {"bg-white"} bgColor={"bg-yellow"} textColor={"text-black"} shadowColor={"#120A21"} text={"Collaboration and Communication"}/>
            </div>
            <div className='pl-16'>
              <ListingCard number={"03"} cardColor = {"bg-white"} bgColor={"bg-black"} textColor={"text-white"} shadowColor={"#8B54FF"} text={"Customer Focus and Results-Driven"}/>
            </div>
          </div>
          <div className={imgstyle['move-top-to-bottom']}>
            <Image
            src={mikeperson}
            alt='mikperson'
            width={700}
            />
          </div>
        </div>

        <div className='mx-10 py-5'>
          <CompaniesSlider/>
        </div>

        <div className='flex flex-col lg:flex-row lg:justify-around lg:items-center py-16 mx-10 space-y-10'>
          
          <div className='space-y-5'>
            <StaticButton text={"Asked Questions"}/>
            <div className='flex-col space-y-5'>
              <div>
                <span className='text-4xl font-manrope font-semibold'>Have Questions In Mind?</span>
              </div>
              <div>
                <span className='text-4xl font-manrope font-semibold'>Frequently Asked Questions!</span>
              </div>
            </div>
          </div>

          <div className='space-y-3'>
              <p className='font-semibold font-manrope text-xl'>Tools & Technogies That We Use</p>
              <div className='flex flex-row items-start justify-start'>
                  {technologies.map((t, index) => (
                    <div key={index} className='px-3 md:px-6 cursor-pointer'>
                      <Image
                        src={t}
                        alt='t'
                        className='absolute w-10 md:w-20'
                      />
                    </div>
                  ))}
              </div>
          </div>
        </div>

        <FAQ bgColor={"bg-white"}/>

        <div className='py-10'>
          <div className='flex flex-col xl:flex-row items-center bg-black mx-10 [box-shadow:10_10_0_0#FFD80D]'>
            <div className='relative left-0 md:bottom-52 md:left-52 flex-col md:mt-64 xl:mb-96 xl:mt-96 xl:flex w-full'>

              <div className={`absolute mx-auto left-[-50] z-0 ${imgstyle['pulse']}`}>
                <Image
                  src={circularthread}
                  alt='circleThread'
                  className='w-fit'
                />
              </div>

              <div className='absolute z-10'>
                <Image
                  src={innovTechlogo}
                  alt='innovtech'
                  className='rounded-2xl mt-14 w-fit'
                />
              </div>
              
              
              <div className={`absolute top-0 bottom-0 left-[-50] right-[600] mx-auto mt-10 z-20 hidden md:block ${imgstyle['move-left-to-right']}`}>
                <Image
                  src={palmtree}
                  alt='palmtree'
                  width={80}
                  className='w-fit'
                />
              </div>

              <div className={`absolute top-0 bottom-0 left-[-50] right-[600] mx-auto mt-80 z-30 hidden md:block ${imgstyle['move-left-to-right']}`}>
                <Image
                  src={shareIcon}
                  alt='shareIcon'
                  className='w-fit'
                />
              </div>

              <div className={`absolute mx-auto ml-64 mt-20 z-30 hidden sm:block ${imgstyle['move-top-to-bottom']}`}>
                <Image
                  src={glowingStar}
                  alt='glowingStart'
                  className='w-fit'
                />
              </div>

              <div className={`absolute mx-auto left-[70] mt-80 z-40 hidden sm:block  `}>
                <Image
                  src={downwardThred}
                  alt='downwardThred'
                  className='w-fit'
                />
              </div>

              <div className={`absolute mx-auto ml-64 left-[-50] mt-64 z-40 hidden sm:block`}>
                <Image
                  src={oppo}
                  alt='oppo'
                  className='w-fit rounded-full'
                />
              </div>
              
            </div>
            <div className='flex-col pt-[400] xl:py-5 '>
              <div className='flex flex-col md:flex-row items-center justify-center'>
                <SpeechBubble />
                <SpeechBubble />
              </div>
              <div className='flex-col items-center justify-center'>
                <SpeechBubble />
              </div>
            </div>
          </div>
        </div>

        <div className='flex-col items-center justify-center '>
          <div className='flex flex-row justify-around items-center'>
            <div className='hidden lg:block'>
              <Image
                src={mark7}
                alt='mark7'
                className={`${imgstyle['move-top-to-bottom']}`}
              />
            </div>
            <div className='flex-col text-center space-y-5'>
              <StaticButton text={"News & Blog"}/>
              <p className='text-3xl font-manrope font-extrabold'>Get Every Single Updated Articles</p>
            </div>
            <div className='hidden lg:block'>
              <Image
                src={mark8}
                alt='mark8'
                className={`${imgstyle['pulse']}`}
              />
            </div>
          </div>
        </div>

        <div className='mx-10 my-10'>
          <BlogSlider/>
        </div>

        <div className='hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-14 xl:mx-32 2xl:mx-52'>
        <Image
          src={mark9}
          alt='mark9'
          className={`${imgstyle['swing-anticlockwise']}`}
        />
        <Image
          src={mark10}
          alt='mark10'
          className={`${imgstyle['swing-anticlockwise']}`}
        />   
        </div>

                  
        <NewsLetter/>
        

        <Footer />
    </>
  )
}
