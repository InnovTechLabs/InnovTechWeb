import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function page({params} : {params : {blogname : String}}) {
  return (
    <>
    <div>
      <Navbar/>
      <div>page {params.blogname}</div>
      <Footer/>
    </div>
    </>
  )
}
