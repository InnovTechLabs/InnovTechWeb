import React from 'react'
import Image from 'next/image'
import imgStyle from "@/public/styles/imageanimate.module.css"


export default function AchievementCard({number, text, image}) {
  return (
    <div className={`flex flex-col items-start justify-center px-10 py-10 space-y-3 ${imgStyle["group-hover-flip-vertical-full-horizontal"]}`}>
      <div>
          <Image
            src={image}
            alt = 'image'
            className={imgStyle["flip-vertical-full-horizontal"]}
          />
      </div>
        <p className='text-4xl font-bold'>{number}</p>
        <p className='w-max'>{text}</p>
    </div>
  )
}
