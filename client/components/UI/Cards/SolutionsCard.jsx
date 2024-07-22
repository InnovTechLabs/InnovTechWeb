import React from 'react'
import Image from 'next/image'

export default function SolutionsCard({image, text}) {
  return (
    <>
    <div className='bg-white p-4 flex items-center space-x-3'>
        <Image
            src={image}
            alt = 'image'
        />
        <div className='font-bold'>   
            {text}
        </div>

    </div>
    </>
  )
}
