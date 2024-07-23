import React from 'react'
import Image from 'next/image'

export default function NumberCard({image, number, text}) {
  return (
    <>
        <div className='flex flex-col lg:flex-row bg-purple justify-center items-center p-5 space-x-10 [box-shadow:10_10px_0_0_#FFD80D] '>
            <Image
                src={image}
                alt='icon'
                className=' object-cover w-50 h-50'
            />
            <div className='flex-col'>
                <div>
                    <span className='text-white text-2xl font-semibold'>{number}</span>
                </div>
                <div>
                    <span className='text-white font-semibold'>{text}</span>
                </div>
            </div>
        </div>
    </>
  )
}
