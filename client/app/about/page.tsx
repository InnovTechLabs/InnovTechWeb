import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import CurrentPageCard from "@/components/UI/Cards/CurrentPageCard"
import SolutionsCard from "@/components/UI/Cards/SolutionsCard"
import markinner from "@/public/assets/images/mark/mark-inner-page.png"
import aboutpage1 from "@/public/assets/images/img-box/about-2.png"
import imgStyle from '@/public/styles/imageanimate.module.css'
import StaticButton from '@/components/UI/Buttons/StaticButton'
import icon1 from "@/public/assets/images/icon/icon-about-1.png"
import icon2 from "@/public/assets/images/icon/icon-about-2.png"
import AnimateButtonSecondary from '@/components/UI/Buttons/AnimateButtonSecondary'

export default function About() {
  return (
    <>
        <Navbar/>
        <div className='flex justify-around items-center'>
            <div>
                <CurrentPageCard text={"About Us"} parent={"Home"} child={"About Us"}/>
            </div>
            <div className={`${imgStyle['move-left-to-right']}`}>
                <Image
                    src={markinner}
                    alt = 'markinner'
                />
            </div>
        </div>
        <div className='flex flex-row justify-center items-center space-x-24'>
            <div className='w-1/2'>
                <Image
                    src={aboutpage1}
                    alt='aboutpage1'
                />
            </div>
            <div className='flex-col space-y-5 w-1/2'>
                <StaticButton text={"About Company"}/>
                <p className='text-3xl font-bold'>Digital Marketing Solutions For Growth Business</p>
                <div className='flex justify-start space-x-16'>
                    <SolutionsCard
                        image={icon1}
                        text={"Research & Strategy"}
                    />
                    <SolutionsCard
                        image={icon2}
                        text={"Development & Scale"}
                    />
                </div>
                <p>Sit amet consectetur adipiscing elit. Felis mollis eget scelerisque nibh mattis nulla. Suspendisse euismod odio bibendum mi aliquam. Dignissim neque viverra tempor enim proin tristique lectus cursus id. Accumsan praesent volu ornarey diam. Vitae malesuada faucibus habitasse eu, et tempus,</p>
                <div className='w-fit'>
                    <AnimateButtonSecondary text={"Learn More Us"}/>
                </div>
            </div>

            <div className='flex flex-row'>
                <StaticButton text={"Our Best Skills"}/>

            </div>
        </div>

    </>
  )
}
