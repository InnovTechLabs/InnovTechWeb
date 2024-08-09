import React from 'react'
import BlogCard from "@/components/UI/Cards/BlogCard"

export default function BlogSlider() {
  return (
    <div className='flex flex-col md:flex-row justify-center md:space-x-5 space-y-10 md:space-y-0'>
        <BlogCard/>
        <BlogCard/>
    </div>
  )
}
