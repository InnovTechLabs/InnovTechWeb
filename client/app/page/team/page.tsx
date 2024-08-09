
import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import CurrentPageCard from "@/components/UI/Cards/CurrentPageCard"
import SolutionsCard from "@/components/UI/Cards/SolutionsCard"
import markinner from "@/public/assets/images/mark/mark-inner-page.png"
import aboutpage1 from "@/public/assets/images/img-box/about-2.png"
import aboutpage2 from "@/public/assets/images/img-box/about-3.png"
import aboutpage3 from "@/public/assets/images/img-box/business.png"
import StaticButton from '@/components/UI/Buttons/StaticButton'
import icon1 from "@/public/assets/images/icon/icon-about-1.png"
import icon2 from "@/public/assets/images/icon/icon-about-2.png"
import AnimateButtonSecondary from '@/components/UI/Buttons/AnimateButtonSecondary'
import NumberCardSmall from '@/components/UI/Cards/NumberCardSmall'
import clientIcon from "@/public/assets/images/icon/client.svg"
import accomplishedIcon from "@/public/assets/images/icon/accomplished.svg"
import earthIcon from "@/public/assets/images/icon/earth.svg"
import trophyIcon from "@/public/assets/images/icon/trophy.svg"
import team1 from "@/public/assets/images/img-box/team-1.jpg";
import team2 from "@/public/assets/images/img-box/team-2.jpg";
import team3 from "@/public/assets/images/img-box/team-3.jpg";
import team4 from "@/public/assets/images/img-box/team-4.jpg";
import TeamMemberCard from '@/components/UI/Cards/TeamMemberCard'
import SkillSlider from '@/components/UI/SkillSlider'
import SpeechBubbleSecondary from "@/components/UI/SpeechBubbleSecondary"

import imgStyle from "@/public/styles/speechbubble.module.css"
import Footer from '@/components/Footer'
import NewsLetter from '@/components/NewsLetter'

export default function Team() {
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
      <div className='bg-white space-y-32'>
        <div className='flex flex-col justify-center items-center space-y-10 py-10'>
          <StaticButton text={"Team Member"}/>
          <p className='text-4xl'>We Have Experienced Team Members! Meet With Us</p>
          <div className='flex flex-col md:flex-row justify-center space-x-10 items-center'>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
          </div>
          <div className='flex flex-col md:flex-row justify-center space-x-10 items-center'>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
          </div>
          <div className='flex flex-col md:flex-row justify-center space-x-10 items-center'>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
          </div>
          <div className='flex flex-col md:flex-row justify-center space-x-10 items-center'>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
            <TeamMemberCard image={team1} name={"David"} title={"CEO"}/>
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
      <div className='flex flex-col justify-center items-center space-y-10'>
        <StaticButton text={"Testimonials"}/>
        <p className='text-4xl'>What Our Clients Say About Our Digital Solutions</p>
        <div className='flex flex-col md:flex-row justify-center items-center space-x-14 mx-10'>
          <SpeechBubbleSecondary/>
          <SpeechBubbleSecondary/>
          <SpeechBubbleSecondary/>

        </div>
      </div>
      <NewsLetter/>
      <Footer/>
      </div>

      
    </>
  )
}
