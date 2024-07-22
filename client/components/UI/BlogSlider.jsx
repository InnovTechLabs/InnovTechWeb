import React from 'react'
import BlogCard from "@/components/UI/Cards/BlogCard"

export default function BlogSlider() {
  return (
    <div className='flex justify-center space-x-5'>
        <BlogCard/>
        <BlogCard/>
    </div>
  )
}
