import React from 'react'
import Image from 'next/image'
import blog1 from "@/public/assets/images/img-box/blog-1.jpg"
import blog2 from "@/public/assets/images/img-box/blog-2.jpg"
import blog3 from "@/public/assets/images/img-box/blog-3.jpg"
import blog4 from "@/public/assets/images/img-box/blog-4.jpg"
import blog5 from "@/public/assets/images/img-box/blog-5.jpg"
import arrow from "@/public/assets/images/icon/arrow.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'


export default function BlogCard() {
  return (
    <>
    <div className='flex flex-col-reverse lg:flex-row lg:space-y-0 items-center bg-white p-6'>
        <div className='space-y-5 py-10'>
            <div className='space-y-5'>
                <div className='flex flex-row items-center justify-start space-x-4 text-purple'>
                    <FontAwesomeIcon icon={faCalendar} size='xl'/>
                    <p>September 25, 2022</p>

                </div>
                <p className='font-bold text-2xl'>How PartyTown Eliminated Website Bloat From Efficeint Workflow Rendering Patterns</p>
            </div>
            <div className='flex flex-row justify-start items-center space-x-3'>
                <p className='underline'>Read More</p>
                <Image
                    src={arrow}
                    alt='arrow'
                />
                
            </div>
        </div>
        <div className='[box-shadow:5_5_0_0#8B54FF] transition-all delay-200 ease-in-out hover:[box-shadow:5_5_0_0#FFD80D] w-fit'>
            <Image
            src={blog2}
            />
        </div>
    </div>
    </>
  )
}
