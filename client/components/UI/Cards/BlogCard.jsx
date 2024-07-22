import React from 'react'
import Image from 'next/image'
import blog1 from "@/public/assets/images/img-box/blog-1.jpg"
import blog2 from "@/public/assets/images/img-box/blog-2.jpg"
import blog3 from "@/public/assets/images/img-box/blog-3.jpg"
import blog4 from "@/public/assets/images/img-box/blog-4.jpg"
import blog5 from "@/public/assets/images/img-box/blog-5.jpg"


export default function BlogCard() {
  return (
    <>
    <div className='flex flex-col-reverse lg:flex-row lg:space-y-0 items-center bg-white p-6'>
        <div className='space-y-5'>
            <div className='space-y-5'>
                <p>September 25, 2022</p>
                <p>How PartyTown Eliminated Website Bloat From Efficeint Workflow Rendering Patterns</p>
            </div>
            <div>
                Read More
            </div>
        </div>
        <div className='[box-shadow:5_5_0_0#8B54FF] transition-all delay-200 ease-in-out hover:[box-shadow:5_5_0_0#FFD80D] w-fit'>
            <Image
            src={blog2}
            />
        </div>
    </div>
    </>
  )
}
