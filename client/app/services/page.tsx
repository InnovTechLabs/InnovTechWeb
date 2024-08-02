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
import star from "@/public/assets/images/mark/mark-5.png"
import sun from "@/public/assets/images/mark/mark-6.png"
import clientIcon from "@/public/assets/images/icon/client.svg"
import accomplishedIcon from "@/public/assets/images/icon/accomplished.svg"
import earthIcon from "@/public/assets/images/icon/earth.svg"
import trophyIcon from "@/public/assets/images/icon/trophy.svg"




export default function Services() {

  const [categories, setCategories] = useState([])

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
      <div className='bg-white py-24'>

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
        
        <div className='bg-cream flex flex-col justify-center items-center space-y-10 px-10 py-20 mx-12 [box-shadow:10_10_0_0] md:mx-24'>
          <div>
              <StaticButton
              text={"Popular Service"}
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
              <span className='text-5xl font-bold'>Outsmart the competition with best-in-class SEO marketing services</span>
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
                    <ServicesCard heading={category.category_name} description={category.category_description} image={category.category_image} />
                    </div>
                  ))}
            </div>
            <div className='space-y-5 lg:flex md:space-x-5 lg:space-x-5 items-center'>
                  {categories.slice(4,7).map((category) => (
                    <div key={category.id}>
                    <ServicesCard heading={category.category_name} description={category.category_description} image={category.category_image} />
                    </div>
                  ))}
            </div>
          </div>   
        </div>
      </div>
      <div className='flex flex-col md:flex-row bg-black p-5 justify-center items-center px-10 space-y-10 md:space-y-0 space-x-0 md:space-x-10 py-10'>
        <div>
            <NumberCardSmall text={"Satisfied Clients"} number={"512k"} image={clientIcon}/>
        </div>
        <div>
            <NumberCardSmall text={"Experienced Members"} number={"835+"} image={accomplishedIcon}/>
        </div>
        <div>
            <NumberCardSmall text={"Our Global Reach"} number={"345k"} image={earthIcon}/>
        </div>
        <div>
            <NumberCardSmall text={"Awards Winning"} number={"962k"} image={trophyIcon}/>
        </div>
      </div>
      <div className='bg-white py-10'>
        <div className='flex flex-col lg:flex-row justify-around items-center mx-10'>
          <div className='py-10'>
            <div className='flex flex-col sm:flex-row justify-center items-center py-10 space-y-10'>
              <div className='flex flex-col space-y-10 px-10'>
                  <div>
                    <StaticButton text={"Working Process"}/>
                  </div>
                  <p className='font-bold text-5xl'>Foundation of SEO Business Missions</p>
                  <ListingCard cardColor={"bg-cream"} number={"01"} bgColor={"bg-purple"} textColor={"text-white"} shadowColor={"#120A21"} text={"Creative Thinking and Originality"}/>
              </div>

              <div className='flex flex-col space-y-10 px-10'>
              <ListingCard cardColor={"bg-cream"} number={"02"} bgColor={"bg-yellow"} textColor={"text-black"} shadowColor={"#120A21"} text={"Creative Thinking and Originality"}/>
              <ListingCard cardColor={"bg-cream"} number={"03"} bgColor={"bg-black"} textColor={"text-white"} shadowColor={"#8B54FF"} text={"Creative Thinking and Originality"}/>
              </div>
            </div>
          </div>
          <div className=''>
            <Image
            src={service2}
            alt='service2'
            width={500}
            />
          </div>
        </div>
        <NewsLetter/>
        <Footer/>
      </div>
    </>
  )
}
