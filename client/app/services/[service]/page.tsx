'use client'

import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import generateSlug from '@/utils/slug'

import imgStyle from '@/public/styles/imageanimate.module.css';
import imgstyle from "@/public/styles/imageanimate.module.css"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsLetter from '@/components/NewsLetter'
import StaticButton from '@/components/UI/Buttons/StaticButton';
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard'
import ServicesCard from '@/components/UI/Cards/ServicesCard';
import NumberCardSmall from '@/components/UI/Cards/NumberCardSmall';
import ListingCard from '@/components/UI/Cards/LisitingCard';
import CircleButtonQuarternary from '@/components/UI/Buttons/CircleButtonQuarternary';
import AnimateButtonSecondary from '@/components/UI/Buttons/AnimateButtonSecondary';
import AchievementCard from "@/components/UI/Cards/AchievementCard"
import PricingCard from "@/components/UI/Cards/PricingCard"
import PricingCardSecondary from "@/components/UI/Cards/PricingCardSecondary"


import whytake1icon1 from "@/public/assets/images/icon/why-take-1.png"
import whytake1icon2 from "@/public/assets/images/icon/why-take-2.png"
import whytake1icon3 from "@/public/assets/images/icon/why-take-3.png"
import check from "@/public/assets/images/icon/check.svg"
import business from "@/public/assets/images/img-box/business.png"
import technical1 from "@/public/assets/images/icon/technical-1.png"
import technical2 from "@/public/assets/images/icon/technical-2.png"
import service1 from "@/public/assets/images/img-box/service-1.png"
import service2 from "@/public/assets/images/img-box/service-2.png"
import markinner from "@/public/assets/images/mark/mark-inner-page.png";
import mark from "@/public/assets/images/mark/mark-step.png"
import rocket from "@/public/assets/images/icon/process-1.png"
import computer from "@/public/assets/images/icon/process-2.png"
import hand from "@/public/assets/images/icon/process-3.png"
import whychooseimage from "@/public/assets/images/img-box/why-choose.png"
import star from "@/public/assets/images/mark/mark-5.png"
import sun from "@/public/assets/images/mark/mark-6.png"
import clientIcon from "@/public/assets/images/icon/client-purple.svg"
import accomplishedIcon from "@/public/assets/images/icon/accomplished-purple.svg"
import earthIcon from "@/public/assets/images/icon/earth-purple.svg"
import trophyIcon from "@/public/assets/images/icon/trophy-purple.svg"
import arrow from "@/public/assets/images/icon/arrow.svg"

export default function Service({params} : {params : {service : string}}) {
  const detailName = params.service.replace("-", " ")
  const slug = generateSlug(params.service)


  const [category, setCategory] = useState([])
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();


  const fetchCategory = async() => {
    const slug = generateSlug(params.service);
    console.log(slug);
    
    try {
      const response = await axios.get(`http://localhost:5000/category/${slug}`);
      setCategory(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setRedirect(true);
      } else {
        console.error("Error fetching blog data:", err);
      }
    }
  }

  useEffect(() => {
    fetchCategory()
  },[])

  useEffect(() => {
    if (redirect) {
      router.push('/404');
    }
  }, [redirect, router]);

  return (
    <>
      {category? (
        <div>
          <Navbar/>
          <div className='flex flex-col space-y-10 py-10 md:flex-row justify-around items-center px-10'>
            <div>
              <CurrentPageCard text={"Service Details"} parent={"Home"} child={"Service Details"} />
            </div>
            <div className={`${imgStyle['']}`}>
              <Image
                src={markinner}
                alt='markinner'
              />
            </div>
          </div>
          <div className='bg-white space-y-48'>
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
            <div className='flex flex-col md:flex-row justify-around items-center 2xl:mx-52 xl:mx-32 mx-10'>
              <div className='md:w-1/2'>
                <Image
                src={whychooseimage}
                alt='whychooseusimage'
                />
              </div>
              <div className='md:w-1/2 space-y-10'>
                <StaticButton text={"Why Choose Us"}/>
                <h1 className=' text-5xl font-bold'>We’re Professional Digital Services Provider Agency</h1>
                <p>Sit amet consectetur adipiscing elit mollis eget scelerisque nibh mattis nulla. Suspendisse euismod bibendum mi alique Dignissim neque viverra tempor enim proin tristique lectus</p>            
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
            </div>
            <div className='flex flex-col md:flex-row items-center justify-around mx-10 2xl:mx-52 xl:mx-32'>
              <div className='flex flex-col items-start space-y-10 justify-center'>
                <StaticButton text={"Technical Service"}/>
                <p className='font-bold text-5xl'>Unlock Technical Potential Solutions Carefully</p>

                <div className='flex flex-row items-center justify-center space-x-10'>
                  <div>
                      <Image
                      src={technical1}
                      alt='techinal1'
                      />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <p className='font-bold'>Benefited For Marketing</p>
                    <p>On the other hand, we denounce righteous indignation and dislike men who are so beguiled and demoralized the charms of pleasure of the moment blinded</p>
                  </div>
                </div>

                <div className='flex flex-row items-center justify-center space-x-10'>
                  <div>
                      <Image
                      src={technical2}
                      alt='techinal2'
                      />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                  <p className='font-bold'>UI/UI Design & Development</p>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delenitie atque corrupti quos dolores et quas molestias</p>
                  </div>
                </div>  
                    
              </div>
              <div className='md:w-1/2 flex justify-center items-center'>
                <Image
                src={service2}
                alt='service2'
                />

              </div>
            </div>

            <div className='flex flex-col justify-around items-center space-y-10'>
              <StaticButton text={"Why Take Us"}/>
              <p className='text-5xl'>Why Over 1,532 Cusomter Care To Take Our Services</p>
              <div className='flex flex-col md:flex-row justify-center items-center space-x-12 mx-10 p-5'>
                <div className='flex flex-col justify-center items-start space-y-10 p-10'>
                  <div className={`${imgStyle['move-bottom-to-top']}`}>
                    <Image
                      src={whytake1icon1}
                      alt='whytake1icon1'
                    />
                  </div>
                  <p className='font-bold text-2xl'>Easy & Quick Set Up</p>
                  <p>At vero eos et accusamus iusto dignissimos ducimus qui blanditiis praesentium</p>
                </div>
                <div className='flex flex-col justify-center items-start space-y-10 shadow-2xl shadow-extralightpurple p-10'>
                  <div className={`${imgStyle['move-bottom-to-top']}`}>
                    <Image
                      src={whytake1icon2}
                      alt='whytake1icon2'
                    />
                  </div>
                  <p className='font-bold text-2xl'>Easy & Quick Set Up</p>
                  <p>At vero eos et accusamus iusto dignissimos ducimus qui blanditiis praesentium</p>
                </div>
                <div className='flex flex-col justify-center items-start space-y-10 p-10'>
                  <div className={`${imgStyle['move-bottom-to-top']}`}>
                    <Image
                      src={whytake1icon3}
                      alt='whytake1icon3'
                    />
                  </div>
                  <p className='font-bold text-2xl'>Easy & Quick Set Up</p>
                  <p>At vero eos et accusamus iusto dignissimos ducimus qui blanditiis praesentium</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center 2xl:mx-52 xl:mx-32'>
              <div className='flex flex-col justify-center items-start space-y-10'>
                <StaticButton text={"Company Statistics"}/>
                <p className='text-5xl font-bold'>We’ve Great Achievement For Global Customer</p>
                <p>Sit amet consectetur adipiscing elit mollis eget scelerisque nibh mattis nulla. Suspendisse euismod bibendum mi alique Dignissim neque viverra tempor enim proin tristique lectus</p>
                <AnimateButtonSecondary text={"Learn More Us"}/>
              </div>
              <div className='flex flex-col justify-center items-center space-x-5'>
                <div className='flex flex-row justify-center items-center'>
                  <div className='shadow-2xl shadow-extralightpurple transition-all hover:[box-shadow:5px_5px_0_0_#9664FF]'>
                    <AchievementCard number={"512k"} image={clientIcon} text={"Satisfied Clients"}/>
                  </div>
                  <div className='shadow-2xl shadow-extralightpurple transition-all hover:[box-shadow:5px_5px_0_0_#9664FF]'>
                    <AchievementCard number={"345k"} image={earthIcon} text={"Our Global Branch"}/>
                  </div>
                </div>
                <div className='flex flex-row justify-center items-center space-x-5'>
                  <div className='shadow-2xl shadow-extralightpurple transition-all hover:[box-shadow:5px_5px_0_0_#9664FF]'>
                    <AchievementCard number={"835+"} image={accomplishedIcon} text={"Experience Member"}/>
                  </div>
                  <div className='shadow-2xl shadow-extralightpurple transition-all hover:[box-shadow:5px_5px_0_0_#9664FF]'>
                    <AchievementCard number={"962k"} image={trophyIcon} text={"Awards Winning"}/>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row justify-around items-center space-x-10 mx-10'>
                <div className='w-full'>
                    <Image
                      src={business}
                      alt='business'
                    />
                </div>
                <div className='space-y-10'> 
                  <StaticButton text={"Business Analysis"}/>
                  <p className='text-4xl font-bold'>Build Your Business Grateful & Successful Together</p>
                  <p>Sit amet consectetur adipiscing elit. Ornare molestie ultrices accumsan nunc. Dolor feugiat etiam egestas volutpat, tempus maecenas quam sagittis. Tortor ut dictumst sit euismod quis fringilla. Laoreet tempor morbi adipiscing Orci, quisque vitae nisl, sed sit nec feugiat amet. In feugiat</p>
                  <div className='flex flex-row space-x-3'>
                    <p className='underline'>Learn More</p>
                    <Image
                      src={arrow}
                      alt='arrow'
                    />
                  </div>
                </div>
            </div>
            <div>
              <div className='flex flex-col justify-center items-center space-y-10 '>
                <div>
                  <StaticButton text={"Pricing Package"}/>
                </div>
                <p className='text-5xl font-bold'>We Have Amazing Pricing Package For Digital Services</p>
              </div>
              <div className='flex flex-col lg:flex-row justify-center items-center py-10 space-y-10 md:space-y-0 space-x-0 md:space-x-10'>
                <PricingCard price = {"$28.69"}/>
                <PricingCardSecondary price = {"$28.69"}/>
                <PricingCard price = {"$28.69"}/>
              </div>
            </div>
            <NewsLetter/>
            <Footer/>
          </div>
        </div>
      ) : (
        <div>

        </div>
      )}
    </>
  )
}
