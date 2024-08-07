import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck} from "@fortawesome/free-solid-svg-icons"
import AnimateButtonTertiary from '../Buttons/AnimateButtonTertiary'

export default function PricingCardSecondary({price}) {
  return (
    <>
    <div className='flex flex-col justify-center items-start shadow-2xl bg-purple [box-shadow:10px_10px_0_0#120A21] shadow-extralightpurple p-16 space-y-14 transtion-all ease-in-out duration-150 group'>
        <div className=' space-y-2 '>
            <p className='font-bold text-white'>Basic Plan</p>
            <div className='flex flex-row items-center'>
            <p className=' text-white text-4xl font-bold'>{price}</p>
            <span className='text-white'>/Monthly</span>
            </div>
            <p>Save 25% For All Marketing Services</p>
        </div>

        <div className='space-y-3'>
            <div className='flex flex-row justify-center items-center space-x-3'>
                <div className='bg-white text-black rounded-full px-2 py-1'>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
                <p>Digital Business Strategy</p>
            </div>

            <div className='flex flex-row justify-center items-center space-x-3'>
                <div className='bg-white text-black rounded-full px-2 py-1'>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
                <p>Digital Business Strategy</p>
            </div>

            <div className='flex flex-row justify-center items-center space-x-3'>
                <div className='bg-white text-black rounded-full px-2 py-1'>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
                <p>Digital Business Strategy</p>
            </div>

            <div className='flex flex-row justify-center items-center space-x-3'>
                <div className='bg-white text-black rounded-full px-2 py-1'>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
                <p>Digital Business Strategy</p>
            </div>
        </div>
         <AnimateButtonTertiary text={"Choose Package"}/>
    </div>
    </>
  )
}
