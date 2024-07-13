'use client'
import Image from 'next/image'
import NavLogo from "@/public/assets/images/logo/logo@2x.png"
import BoxLogo from "@/public/assets/images/img-box/button.svg"
import Menu from "@/public/assets/images/icon/menu.png"
import MenuClose from "@/public/assets/images/icon/menuclose.png"
import DropDown from "@/public/assets/images/icon/dropdown.svg"
import { NavHeadings } from '@/static/NavHeadings'
import { useState } from 'react'

export default function Navbar() {
    const [navToggle, setnavToggle] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        setnavToggle(!navToggle)
        console.log(navToggle);
    }

  return (
    <>
    <div className='mx-auto font-manrope font-bold space-y-5'>
        <div className='flex flex-row  justify-between items-center pt-3 mx-10'>
            <div className='cursor-pointer'>
                <Image
                src={NavLogo}
                alt='NavLogo'
                width={190}
                height={190}
            />
            </div>
            <div className='hidden xl:flex flex-row space-x-8 '>
                {NavHeadings.map((heading, index) => 
                    heading.subpath ? (
                        <div key={index} className='group relative dropdown tracking-wider flex flex-row items-center cursor-pointer'>
                            {heading.text}{<Image src={DropDown} alt = "DropDown" width={20} height={20}/>}
                            <div className="group-hover:block dropdown-menu absolute hidden h-0 w-64 top-3 py-7">
                                {heading.subpath.map((subheadings, subIndex) => (
                                    <div className='group block hover:text-purple cursor-pointer py-2' key={subIndex}>{subheadings.subText}</div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div key={index} className='cursor-pointer'>{heading.text}</div>
                    )
                )}
            </div>
            <div className='hidden sm:flex flex-row items-center space-x-10'>
                <div className='hidden lg:block'>
                    <button className='bg-yellow px-7 py-7'>
                        <Image
                            src={BoxLogo}
                            alt='BoxLogo'
                        />
                    </button>
                </div>
                <div>
                    <button className='bg-purple px-10 py-4'>
                        <span>Get Started</span>
                    </button>
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
                {NavHeadings.map((heading, index) => (
                    <div key={index} className='mb-4'>
                        <div className='group relative dropdown tracking-wider flex flex-col cursor-pointer'>
                            <div className='flex flex-row justify-between '>
                                {heading.text}
                                {heading.subpath && <Image src={DropDown} alt="DropDown" width={20} height={20}/>}
                            </div>
                            {heading.subpath && (
                                <div className="group-hover:block dropdown-menu hidden">
                                    {heading.subpath.map((subheadings, subIndex) => (
                                        <div className='block cursor-pointer py-2 ml-10' key={subIndex}>{subheadings.subText}</div>
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
