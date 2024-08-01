import React from 'react'
import Image from 'next/image';

export default function AuthorCard({author, about, image}) {
  return (
    <>
    <div className='flex flex-row justify-around items-center bg-cream outline outline-1 space-x-10 w-fit p-10'>
        <Image
          src={`/assets/images/blog/${image}`}
          alt='author'
          className='rounded-full'
          width={50}
          height={50}
        />
      <div className='flex flex-col space-y-2'>
        <p className='font-bold'>{author}</p>
        <p>Author</p>
        <p>{about}</p>
      </div>
    </div>
    </>
  )
}
