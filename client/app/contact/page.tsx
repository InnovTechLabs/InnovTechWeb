import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard'
import Image from 'next/image'
import imgStyle from '@/public/styles/imageanimate.module.css'
import markinner from "@/public/assets/images/mark/mark-inner-page.png"
import contact1 from "@/public/assets/images/img-box/contact-1.png"
import oval from "@/public/assets/images/mark/oval.svg"
import mail from "@/public/assets/images/icon/mail.svg"
import call from "@/public/assets/images/icon/call.svg"
import location from "@/public/assets/images/icon/location.svg"
import StaticButton from '@/components/UI/Buttons/StaticButton'
import CircleButtonTertiary from "@/components/UI/Buttons/CircleButtonTertiary"
import NewsLetter from '@/components/NewsLetter'
export default function page() {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col space-y-10 py-10 md:flex-row justify-around items-center px-10'>
            <div>
                <CurrentPageCard text={"Contact Us"} parent={"Home"} child={"Contact Us"}/>
            </div>
            <div className={`${imgStyle['']}`}>
                <Image
                    src={markinner}
                    alt = 'markinner'
                />
            </div>
        </div>
    <div className='bg-white'>
        <div className='flex flex-col md:flex-row items-center'>
            <div className='w-1/2'>
                <Image
                src={contact1}
                alt='contact1'
                />
            </div>
            <div className='flex-col space-y-5 w-1/2'>
                <StaticButton
                    text={"Contact Us"}
                />
                <p className='text-5xl'>Feel Free to Contact With Us. We’re Ready to Help you</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae</p>
                <div className='flex items-center space-x-5'>
                    <CircleButtonTertiary image ={mail}/>
                    <div>
                        <p>Email Address</p>
                        <p>email</p>                        
                    </div>
                </div>
                <div className='flex items-center space-x-5'>
                    <CircleButtonTertiary image ={call}/>
                    <div>
                        <p>Hotlines</p>
                        <p>+000 (123) 456 88 </p>                        
                    </div>
                </div>
                <div className='flex items-center space-x-5'>
                    <CircleButtonTertiary image ={location}/>
                    <div>
                        <p>Locations</p>
                        <p>55 Main Street, New York</p>                        
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
