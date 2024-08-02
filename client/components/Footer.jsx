import React from 'react'
import Image from 'next/image'
import FooterLogo from "@/public/assets/images/logo/logo@2x.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import location from "@/public/assets/images/icon/location.svg"
import envelope from "@/public/assets/images/icon/envelope.svg"
import call from "@/public/assets/images/icon/call.svg"

import facebook from "@/public/assets/images/icon/facebook.svg"
import twitter from "@/public/assets/images/icon/twitter.svg"
import instagram from "@/public/assets/images/icon/instagram.svg"
import linkedin from "@/public/assets/images/icon/linkedin.svg"
import CircleLinkButton from './UI/Buttons/CircleLinkButton'
import CircleButtonQuarternary from "@/components/UI/Buttons/CircleButtonQuarternary"

export default function Footer() {
  return (
    <>
    <div className='mx-auto mt-10'>
        <div className='flex flex-col space-y-10 md:flex-row md:items-start md:justify-around mx-10 md:mx-10 md:space-x-32'>

            <div className='w-full space-y-5 md:flex-1 md:flex-col md:w-1/4'>
                <Image
                    src={FooterLogo}
                    alt='footerLogo'
                    width = {190}
                    height = {190}
                />
                <p>Innov Tech is a top web design and digital marketing agency in Nepal, providing customized websites, UX design, SEO, e-commerce, copywriting, and responsive design services. We prioritize customer satisfaction, using cutting-edge technology and creative solutions for businesses of all sizes.</p>
                <div className='flex space-x-5 w-max'>
                    <CircleLinkButton image={facebook}/>
                    <CircleLinkButton image={twitter}/>
                    <CircleLinkButton image={instagram}/>
                    <CircleLinkButton image={linkedin}/>
                </div>
            </div>

            <div className='flex-1'>
                <div className='flex-col space-y-5'>
                    <p className=''>Quick Links</p>
                    <div className='flex flex-row justify-between md:flex-col lg:space-y-3 xl:flex-row'>
                            <ul className='space-y-3'>
                                <li>Services</li>
                                <li>Our Pricing</li>
                                <li>Our Portfolio</li>
                                <li>Contact Us</li>
                                <li>Team</li>
                            </ul>   
                            <ul className='space-y-3'>
                                <li>About Company</li>
                                <li>Our Contact</li>
                                <li>Blog Details</li>
                                <li>Faqs</li>
                            </ul>
                    </div>
                </div>
            </div>
            
            <div className='flex-1'>
                <div className='flex flex-col  space-y-8 w-max'>
                    <p className=''>Supports</p>
                    <div className='flex flex-row items-center space-x-4'>
                        <CircleButtonQuarternary image={location}/>
                        <div className='flex flex-col'>
                            <span>Location</span>
                            <span>Maharajgunj,Kathmandu</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center space-x-4'>
                        <CircleButtonQuarternary image={envelope}/>
                        <div className='flex flex-col'>
                            <span>Email Us</span>
                            <span>innovNp@outlook.com</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center space-x-4'>
                        <CircleButtonQuarternary image={call}/>
                        <div className='flex flex-col'>
                            <span>Phone No</span>
                            <span>Call +977 9851 029 415</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-10'>
            <hr />
        </div> 
        <div className='flex flex-col items-center justify-center space-y-4 lg:justify-between lg:flex-row md:px-32 lg:space-x-12'>
            <p>&copy; 2024 <span>INNOV</span> All rights reserved.</p>
            <div className='flex flex-row items-center space-x-5'>
                <span>About</span>
                <span>Setting & Privacy</span>
                <span> Faqs</span>
            </div>
        </div>        
    </div>
    </>
  )
}
