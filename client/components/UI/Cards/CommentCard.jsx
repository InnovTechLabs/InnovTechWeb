import React from 'react'
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import timeAgo from "@/utils/timeAgo"


export default function CommentCard({image, name, comment, date}) {
  return (
    <>
    <div className='flex md:flex-row flex-col items-center bg-cream [box-shadow:5_5_0_0#120A21] p-5 space-y-3 space-x-5'>
        <div>
            <Image
                src={image}
                alt='image'
                className='rounded-full'
            />
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-row space-x-5'>
                <p className='font-bold'>
                    {name}
                </p>
                <p>
                    <FontAwesomeIcon icon={faClock}/>
                </p>
                <p >
                    {timeAgo(date)}
                </p>
            </div>
            <div>
                {comment}
            </div>
        </div>

    </div>
    </>
  )
}
