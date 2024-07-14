import React from 'react'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Script from 'next/script'

export default function Home() {
  return (
    <>
        <Script src="https://kit.fontawesome.com/6bffda6da6.js"/>
        <Navbar/>
        <Footer/>
    </>
  )
}
