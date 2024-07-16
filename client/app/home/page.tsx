import React from 'react'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import TopSlider from "@/components/TopSlider"
import NumberCard from "@/components/UI/NumberCard"
import { NumberCardInfo } from '@/static/NumberCardInfo'


export default function Home() {


  return (
    <>
        <Navbar/>
        <TopSlider/>
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
        <Footer/>
    </>
  )
}
