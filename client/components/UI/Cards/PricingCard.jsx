import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck} from "@fortawesome/free-solid-svg-icons"
import AnimateButtonSecondary from '../Buttons/AnimateButtonSecondary'
import AnimateButton from '../Buttons/AnimateButton'

export default function PricingCard({price}) {
  return (
    <>
    <div className='flex flex-col justify-center items-start shadow-2xl shadow-extralightpurple p-16 space-y-14 transtion-all ease-in-out duration-150 group hover:bg-purple hover:text-white hover:[box-shadow:10_10px_0_0_#120A21]'>
        <div className=' space-y-2 '>
            <p className='font-bold'>Basic Plan</p>
            <div className='flex flex-row items-center'>
            <p className=' text-lightpurple text-4xl font-bold group-hover:text-white'>{price}</p>
            <span className='group-hover:text-white'>/Monthly</span>
            </div>
            <p>Save 25% For All Marketing Services</p>
        </div>

        <div className='space-y-3'>
            <div className='flex flex-row justify-center items-center space-x-3'>
                <div className='text-white bg-purple group-hover:bg-white group-hover:text-black rounded-full px-2 py-1'>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
                <p>Digital Business Strategy</p>
            </div>

            <div className='flex flex-row justify-center items-center space-x-3'>
                <div className='text-white bg-purple group-hover:bg-white group-hover:text-black rounded-full px-2 py-1'>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
                <p>Digital Business Strategy</p>
            </div>

            <div className='flex flex-row justify-center items-center space-x-3'>
                <div className='text-white bg-purple group-hover:bg-white group-hover:text-black rounded-full px-2 py-1'>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
                <p>Digital Business Strategy</p>
            </div>

            <div className='flex flex-row justify-center items-center space-x-3'>
                <div className='text-white bg-purple group-hover:bg-white group-hover:text-black rounded-full px-2 py-1'>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
                <p>Digital Business Strategy</p>
            </div>
        </div>
         <AnimateButtonSecondary text={"Choose Package"}/>
    </div>
    </>
  )
}
