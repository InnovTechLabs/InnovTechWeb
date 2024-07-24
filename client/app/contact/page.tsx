import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard';
import Image from 'next/image';
import imgStyle from '@/public/styles/imageanimate.module.css';
import markinner from "@/public/assets/images/mark/mark-inner-page.png";
import contact1 from "@/public/assets/images/img-box/contact-1.png";
import mail from "@/public/assets/images/icon/mail.svg";
import call from "@/public/assets/images/icon/call.svg";
import location from "@/public/assets/images/icon/location.svg";
import StaticButton from '@/components/UI/Buttons/StaticButton';
import CircleButtonTertiary from "@/components/UI/Buttons/CircleButtonTertiary";
import NewsLetter from '@/components/NewsLetter';
import Map from "@/components/Map";
import InputBox from "@/components/UI/InputBox/InputBox"
import TextArea from "@/components/UI/InputBox/TextArea"
import AnimateButtonTertiary from "@/components/UI/Buttons/AnimateButtonTertiary"

export default function page() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col space-y-10 py-10 md:flex-row justify-around items-center px-10'>
        <div>
          <CurrentPageCard text={"Contact Us"} parent={"Home"} child={"Contact Us"} />
        </div>
        <div className={`${imgStyle['']}`}>
          <Image
            src={markinner}
            alt='markinner'
          />
        </div>
      </div>
      <div className='bg-white '>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-fit px-10 md:px-52'>
            <Image
              src={contact1}
              alt='contact1'
            />
          </div>
          <div className='flex-col space-y-5 w-1/2'>
            <StaticButton text={"Contact Us"} />
            <p className='text-5xl'>Feel Free to Contact With Us. We’re Ready to Help you</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae</p>
            <div className='flex items-center space-x-5'>
              <CircleButtonTertiary image={mail} />
              <div>
                <p>Email Address</p>
                <p>email</p>
              </div>
            </div>
            <div className='flex items-center space-x-5'>
              <CircleButtonTertiary image={call} />
              <div>
                <p>Hotlines</p>
                <p>+000 (123) 456 88 </p>
              </div>
            </div>
            <div className='flex items-center space-x-5'>
              <CircleButtonTertiary image={location} />
              <div>
                <p>Locations</p>
                <p>55 Main Street, New York</p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative py-80 md:py-48'>
          <Map />
          <div className='bg-white absolute inset-0 flex-col justify-center items-center p-24 mt-[600] mx-10 md:mx-32 text-center space-y-10 mb-[-300] outline outline-1 [box-shadow:5_5_0_0]'>
            <StaticButton text={"Get In Touch"} />
            <p>Have Any Question On Mind! Send Us Message</p>
            <div className='flex flex-col justify-center space-y-5 md:space-y-0 md:flex-row   hover:text-white space-x-0 md:space-x-10'>
                <InputBox type={"text"} placeholder={"Full Name"}/>
                <InputBox type={"text"} placeholder={"Phonenumber"}/>
                <InputBox type={"email"} placeholder={"Email"}/>
            </div>
            <TextArea placeholder={"Write Message"} rows={10}/>
            <div className='w-fit'>
                <AnimateButtonTertiary text={"Send Us Message"}/>
            </div>
          </div>
        </div>
        <div className='pt-96 py-12'>
          <NewsLetter />
        </div>
        <Footer />
      </div>
    </>
  );
}
