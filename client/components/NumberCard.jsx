import React from 'react'
import Image from 'next/image'

export default function NumberCard({image, number, text}) {
  return (
    <>
        <div className='flex flex-col lg:flex-row bg-purple justify-center items-center p-7 space-x-5 [box-shadow:10_10px_0_0_#FFD80D] '>
            <div className='border border-white rounded-lg p-3 py-6 bg-lightpurple'>
                <Image
                    src={image}
                    alt='icon'
                    className=' object-cover w-full h-full'
                />
            </div>
            <div className='flex-col'>
                <div>
                    <span className='text-white text-8xl font-semibold'>{number}</span>
                </div>
                <div>
                    <span className='text-white font-semibold'>{text}</span>
                </div>
            </div>
        </div>
    </>
  )
}
