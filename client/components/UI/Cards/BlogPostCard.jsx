import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'

export default function BlogPostCard({date, title, content, image}) {
  return (
    <>
    <div className='flex flex-col md:flex-row bg-cream py-24 px-10 space-y-24 md:space-y-0 justify-around items-center transition-all ease-in-out duration-300 hover:[box-shadow:10_10_0_0#8B54FF]'>
        <div className='flex-col space-y-10'>
            <div className='flex flex-row items-center space-x-5'>
                <FontAwesomeIcon icon={faCalendar}/>
                <p>{date}</p>
            </div>
            <div>
                <p className='text-3xl font-bold'>{title}</p>
                <p>{content}</p>                
            </div>
            <div className='flex-row'>
                <p className='underline'>Read More</p>
                <p></p>
            </div>
        </div>
        <div className='md:ml-24 [box-shadow:-25_-25_0_0#FFD80D]'>
            <Image
                src={image}
                alt='blogImage'
            />
        </div>

    </div>
    </>
  )
}
