'use client'
import Image from 'next/image'
import NavLogo from "@/public/assets/images/logo/logo@2x.png"
import BoxLogo from "@/public/assets/images/img-box/button.svg"
import Menu from "@/public/assets/images/icon/menu.png"
import MenuClose from "@/public/assets/images/icon/menuclose.png"
import DropDown from "@/public/assets/images/icon/dropdown.svg"
import { NavHeadings } from '@/static/NavHeadings'
import { useState } from 'react'
import AnimateButton from "@/components/UI/Buttons/AnimateButton"
import Link from 'next/link'

export default function Navbar() {
    const [navToggle, setnavToggle] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        setnavToggle(!navToggle)
        console.log(navToggle);
    }

  return (
    <>
    <div className='font-manrope font-bold'>
        <div className='flex flex-row justify-between items-center pt-3 mx-5 md:px-10'>
            <div className='cursor-pointer'>
                <Image
                src={NavLogo}
                alt='NavLogo'
                width={190}
                height={190}
            />
            </div>

            <div className='hidden xl:flex flex-row mr-16 px-16 py-6 border-[1px] [box-shadow:10_10px_0_0_]'>
                {NavHeadings.map((heading, index) => 
                    heading.subpath.length > 0 ? (
                        <div key={heading.text} className='group flex flex-row items-center cursor-pointer relative tracking-wider px-3 py-1 transition-all duration-300 ease-in-out hover:bg-purple hover:text-white hover:[box-shadow:5px_5px_0_0_#010C2A] hover:rounded-md'>
                            
                                <Link href={heading.path}>
                                    <div className='flex flex-row items-center justify-center'>
                                        <div>
                                            {heading.text}
                                        </div>
                                        <div>
                                            {<Image src={DropDown} alt = "DropDown" width={20} height={20}/>}
                                        </div>
                                    </div>
                                </Link>
                            
                            <div className="dropdown-menu absolute hidden transition-all delay-900 ease-in-out h-2 top-8 py-2 w-72 group-hover:grid">
                                {heading.subpath.map((subheadings) => (
                                    <div key={subheadings.subText}>
                                        <Link href={subheadings.subsubPath}>
                                            <div className='cursor-pointer bg-white text-black border-b-gray shadow-2xl shadow-extralightpurple px-5 py-5 border-b-[1px] transition-all delay-200 ease-in-out hover:pl-10 hover:text-purple'>
                                                {subheadings.subText}
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <Link href={heading.path} key={heading.text}>
                            <div className='cursor-pointer px-4 py-1 transition-all duration-300 ease-in-out hover:bg-purple hover:text-white hover:rounded-md hover:[box-shadow:3px_4px_0_0_#010C2A]'>
                                {heading.text}
                            </div>
                        </Link>
                    )
                )}
            </div>
            
            
            <div className='hidden sm:flex flex-row items-center space-x-10'>
                <div className='hidden lg:block'>
                    <button className='bg-yellow px-7 py-7 border-[1px] [box-shadow:7px_7px_0_0_] transition-all duration-300 hover:border-[1px] hover:[box-shadow:4px_4px_0_0_]'>
                        <Image
                            src={BoxLogo}
                            alt='BoxLogo'
                        />
                    </button>
                </div>
                <div>
                    <AnimateButton text={"Get Started"}/>
                </div>
            </div>
            <div className='flex flex-row xl:hidden'>
                <button onClick={handleClick}>
                    {!navToggle ? (
                        <div>
                            <Image
                                src={Menu}
                                alt='MenuIcon'
                                width={25}
                                height={25}
                            />
                        </div>
                    ) : (
                        <Image
                            src={MenuClose}
                            alt='MenuClose'
                            width={25}
                            height={25}
                            className="transition duration-300 ease-in-out"
                        />
                    )}
                </button>
            </div>
        </div>
        <div className='flex flex-row'>
        {navToggle ? (
            <div className='flex flex-col w-full mx-10 xl:hidden'>
                {NavHeadings.map((heading) => (
                    <div key={heading.text} className='mb-4'>
                        <div className='group relative dropdown tracking-wider flex flex-col cursor-pointer'>
                            <div className='flex flex-row justify-between'>
                                {heading.text}
                                {heading.subpath && <Image src={DropDown} alt="DropDown" width={20} height={20}/>}
                            </div>
                            {heading.subpath && (
                                <div className="group-hover:block dropdown-menu hidden">
                                    {heading.subpath.map((subheadings) => (
                                        <div className='block cursor-pointer py-2 ml-10' key={subheadings.subText}>
                                            {subheadings.subText}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        ) : (null)}
        </div>
    </div>
    </>
  )
}
