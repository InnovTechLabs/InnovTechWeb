'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard'
import imgStyle from "@/public/styles/imageanimate.module.css"
import markinner from "@/public/assets/images/mark/mark-inner-page.png";
import spike from "@/public/assets/images/icon/spike-purple.svg"
import star from "@/public/assets/images/icon/star-purple.svg"
import portfolio from "@/public/assets/images/img-box/portfolio.jpg"
import LisitingCard from '@/components/UI/Cards/LisitingCard'
import CircleButtonQuarternary from '@/components/UI/Buttons/CircleButtonQuarternary'
import check from "@/public/assets/images/icon/check.svg"
import marketingProjectImage from "@/public/assets/images/img-box/about-3.png"
import AnimateButtonTertiary from '@/components/UI/Buttons/AnimateButtonTertiary'
import InputBoxSecondary from "@/components/UI/InputBox/InputBoxSecondary"
import TextAreaSecondary from "@/components/UI/InputBox/TextAreaSecondary"
import AnimateButton from '@/components/UI/Buttons/AnimateButton'
import NewsLetter from '@/components/NewsLetter'
import Footer from '@/components/Footer'


export default function PortfolioDetail() {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col space-y-10 py-10 md:flex-row justify-around items-center px-10'>
        <div>
          <CurrentPageCard text={"Portfolio Details"} parent={"Home"} child={"Portfolio Details"} />
        </div>
        <div className={`${imgStyle['']}`}>
          <Image
            src={markinner}
            alt='markinner'
          />
        </div>
      </div>
      <div className='bg-white py-10 space-y-24'>
        <div className='flex flex-col md:flex-row justify-center items-start '>
            <div className='flex flex-col justify-center items-start md:w-1/2 space-y-14'>
                <div className='flex flex-row justify-center items-center'>
                    <Image
                        src={star}
                        alt='star'
                    />
                    <p className='font-bold text-3xl'>Web Design & Development</p>
                </div>
                <div>
                    <p>Sit amet consectetur adipiscing elit. Ac egestas vestibulum ac sit ornare odio orci. Mauris urna, eget placerat pharetra faucibus faucibus ultricies id. Dictum tempor nunc cras id sed. Suspendisse non nibh massa enim ipsum viverra neque. Vestibulum amet elementum pellentesque aliquet ligula nunc est praesent. Augue consectetur luctus in mattis odio purus. Mollis commodo pellentesque a pellentesque facilisi amet, non dolor, lacinia. Amet at nullam rutrum in erat fringilla.</p>
                </div>
                <div>
                    <Image
                    src={portfolio}
                    alt='portfolio'
                    />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <Image
                        src={star}
                        alt='star'
                    />
                    <p className='font-bold text-3xl'>Project Challenges</p>
                </div>
                <div>
                    <p>Dictum tempor nunc cras id sed. Suspendisse non nibh massa enim ipsum viverra neque. Vestibulum amet elementum pellentesque aliquet ligula nunc est praesent. Aue consectetur luctus in mattis odio purus. Mollis commodo pellentesque</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center'>
                    <LisitingCard number={"01"} cardColor={"bg-cream"} bgColor={"bg-purple"} text={"Benefited For Digital Marketing Solution"} textColor={"text-white"} shadowColor={"#120A21"} />
                    <LisitingCard number={"02"} cardColor={"bg-cream"} bgColor={"bg-yellow"} text={"Content and Email Marketing Solutions"} textColor={"text-black"} shadowColor={"#120A21"} />
                    <LisitingCard number={"03"} cardColor={"bg-cream"} bgColor={"bg-black"} text={"UI/UI Design & Web Development"} textColor={"text-white"} shadowColor={"#8B54FF"} />
                    <LisitingCard number={"04"} cardColor={"bg-cream"} bgColor={"bg-pink"} text={"Best Digital Solutions For Butter Business"} textColor={"text-white"} shadowColor={"#120A21"} />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <Image
                        src={star}
                        alt='star'
                    />
                    <p className='font-bold text-3xl'>The Result</p>
                </div>
                <div>
                    <p>Dictum tempor nunc cras id sed. Suspendisse non nibh massa enim ipsum viverra neque. Vestibulum amet elementum pellentesque aliquet ligula nunc est praesent. Aue consectetur luctus in mattis odio purus. Mollis commodo pellentesque</p>
                </div>
                <div className='flex flex-col space-y-5'>

                  <div className='flex flex-row items-center space-x-5'>
                    <div className='w-14'>
                      <CircleButtonQuarternary image={check}/>
                    </div>
                    <div>
                      <p className='font-bold'>Professional SEO Optimizations</p>
                    </div>
                  </div>

                  <div className='flex flex-row items-center space-x-5'>
                    <div className='w-14'>
                      <CircleButtonQuarternary image={check}/>
                    </div>
                    <div>
                      <p className='font-bold'>Experience Team Members & Lot’s Of Customers</p>
                    </div>
                  </div>

                  <div className='flex flex-row items-center space-x-5'>
                    <div className='w-14'>
                      <CircleButtonQuarternary image={check}/>
                    </div>
                    <div>
                      <p className='font-bold'>DIgital Business & SEO Solutions</p>
                    </div>
                  </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center space-y-10'>
                <div className=' bg-cream p-10 space-y-5 w-full'>
                    <p>Project Info</p>
                    <hr />
                    <div className='flex flex-row justify-start items-center space-x-4'>
                        <Image
                            src={spike}
                            alt='spike'
                        />
                        <div className='flex flex-col justify-center items-start'>
                            <p>Category</p>
                            <p>Web Design & Development</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-start items-center space-x-4'>
                        <Image
                            src={spike}
                            alt='spike'
                        />
                        <div className='flex flex-col justify-center items-start'>
                            <p>Category</p>
                            <p>Web Design & Development</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-start items-center space-x-4'>
                        <Image
                            src={spike}
                            alt='spike'
                        />
                        <div className='flex flex-col justify-center items-start'>
                            <p>Category</p>
                            <p>Web Design & Development</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-start items-center space-x-4'>
                        <Image
                            src={spike}
                            alt='spike'
                        />
                        <div className='flex flex-col justify-center items-start'>
                            <p>Category</p>
                            <p>Web Design & Development</p>
                        </div>
                    </div>
                </div>

                <div className='bg-cream space-y-4 p-10 '>
                    <p>Send Us Message</p>
                    <hr />
                    <InputBoxSecondary type={"text"} placeholder={"Full Name"}/>
                    <InputBoxSecondary type={"email"} placeholder={"Email"}/>
                    <TextAreaSecondary type = {"text"} placeholder={"Message"}/>
                    <AnimateButtonTertiary text={"Send Message"}/>
                </div>

                <div className='flex flex-col justify-center items-center p-14 space-y-10 bg-cream'>
                    <p>Lets Start Making New Marketing Project</p>
                    <div>
                        <AnimateButton text={"Get Started"}/>
                    </div>
                    <div>
                        <Image
                            src={marketingProjectImage}
                            alt='marketingProjectImage'
                        />
                    </div>
                </div>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>

      </div>
    </>
  )
}
