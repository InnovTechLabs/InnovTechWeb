import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import CurrentPageCard from "@/components/UI/Cards/CurrentPageCard"
import SolutionsCard from "@/components/UI/Cards/SolutionsCard"
import markinner from "@/public/assets/images/mark/mark-inner-page.png"
import aboutpage1 from "@/public/assets/images/img-box/about-2.png"
import aboutpage2 from "@/public/assets/images/img-box/about-3.png"
import aboutpage3 from "@/public/assets/images/img-box/business.png"
import imgStyle from '@/public/styles/imageanimate.module.css'
import StaticButton from '@/components/UI/Buttons/StaticButton'
import icon1 from "@/public/assets/images/icon/icon-about-1.png"
import icon2 from "@/public/assets/images/icon/icon-about-2.png"
import AnimateButtonSecondary from '@/components/UI/Buttons/AnimateButtonSecondary'
import SkillSlider from "@/components/UI/SkillSlider"
import NumberCardSmall from '@/components/UI/Cards/NumberCardSmall'
import clientIcon from "@/public/assets/images/icon/client.svg"
import accomplishedIcon from "@/public/assets/images/icon/accomplished.svg"
import earthIcon from "@/public/assets/images/icon/earth.svg"
import trophyIcon from "@/public/assets/images/icon/trophy.svg"

import TeamMemberCard from "@/components/UI/Cards/TeamMemberCard"
import Footer from '@/components/Footer'
import Testimonials from "@/components/Testimonials"

import team1 from "@/public/assets/images/img-box/team-1.jpg";
import team2 from "@/public/assets/images/img-box/team-2.jpg";
import team3 from "@/public/assets/images/img-box/team-3.jpg";
import team4 from "@/public/assets/images/img-box/team-4.jpg";


export default function About() {
  return (
    <>
        <Navbar/>
        <div className='flex flex-col space-y-10 py-10 md:flex-row justify-around items-center px-10'>
            <div>
                <CurrentPageCard text={"About Us"} parent={"Home"} child={"About Us"}/>
            </div>
            <div className={`${imgStyle['']}`}>
                <Image
                    src={markinner}
                    alt = 'markinner'
                />
            </div>
        </div>
        <div className='bg-white'>
            <div className='flex flex-col md:flex-row justify-center items-center space-x-24'>
                
                <Image
                    src={aboutpage1}
                    alt='aboutpage1'
                    width={500}
                />

                <div className='flex-col items-center justify-center space-y-5 md:w-1/4 my-10'>
                    <StaticButton text={"About Company"}/>
                    <p className='text-3xl font-bold'>Digital Marketing Solutions For Growth Business</p>
                    <div className='flex flex-col lg:flex-row justify-start space-x-0 lg:space-x-5 space-y-5 lg:space-y-0 w-fit'>
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
            </div>

            <div className='flex flex-col md:flex-row px-10 py-10 justify-around'>
                <div className='flex-col space-y-7'>
                    <StaticButton text={"Our Best Skills"}/>
                    <p className='font-bold font-manrope text-3xl'>We’re So Much Experience In Digital Solutions</p>
                    <SkillSlider text={"Research"} value={"89"}/>
                    <SkillSlider text={"Development"} value={"93"}/>
                    <SkillSlider text={"SEO Optimization"} value={"78"}/>
                </div>
                <div>
                    <Image
                        src={aboutpage2}
                        alt='aboutpage2'
                    />
                </div>
            </div>

            <div className='flex flex-col md:flex-row bg-black p-5 justify-center items-center px-10 space-y-10 md:space-y-0 space-x-0 md:space-x-10'>
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

            <div className='flex flex-col justify-center items-center my-10 space-y-10'>
                <StaticButton text={"Team Member"}/>
                <div className='text-center'>
                    <p>We Have an Experience Team Member!</p>
                    <p>Meet With Us</p>
                </div>
                <div className='flex flex-col md:flex-row space-x-10'>
                    <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
                    <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
                    <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
                    <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-around items-center space-y-10 md:mx-52 sm:mx-10'>
                <div className='w-1/2'>
                    <Image
                    src={aboutpage3}
                    alt='image'
                    />
                </div>
                <div className='flex-col justify-start items-center space-y-5 w-1/2'>
                    <StaticButton text={"Business Analysis"}/>
                    <p className='text-4xl font-bold'>Build Your Business Grateful & Successful Together</p>
                    <p>Sit amet consectetur adipiscing elit. Ornare molestie ultrices accumsan nunc. Dolor feugiat etiam egestas volutpat, tempus maecenas quam sagittis. Tortor ut dictumst sit euismod quis fringilla. Laoreet tempor morbi adipiscing Orci, quisque vitae nisl, sed sit nec feugiat amet. In feugiat</p>
                    <p>Learn More</p>
                </div>
            </div>
            <div className='py-10'>
                <Testimonials/>
            </div>
            <Footer/>

        </div>

    </>
  )
}
