import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'

export default function RecentPost({image, date}) {
  return (
    <>
    <div className='flex flex-row space-x-14 p-4 group '>
        <div className='relative overflow-hidden transition-all duration-500 [box-shadow:5_5_0_0#120A21] group-hover:[box-shadow:5_5_0_0#8B54FF] h-fit'>
            <div className='transition-transform duration-1000 ease-in-out group-hover:scale-125'>
                <Image
                    src={image}
                    alt='postImage'
                    width={100}
                />
            </div>
        </div>
        <div className='flex-col'>
            <div className='flex text-purple items-center space-x-2'>
                <FontAwesomeIcon icon={faCalendar}/> 
                <p>{date}</p>  
            </div>
            <p className='group-hover:text-lightpurple font-bold'>Fluid Sizing Instead Of Media Queries</p>
        </div>
    </div>
    </>
  )
}
