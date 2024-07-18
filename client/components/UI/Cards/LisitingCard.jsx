import React from 'react'

export default function LisitingCard({number, text}) {
  return (
    <>
        <div className='bg-white flex-col group-hover:'>
            <div className='px-14 py-14 space-y-8'>
                <div className = "bg-purple rounded-full p-5 text-white [box-shadow:5_5_0_0#120A21] transition-all delay-100 ease-in-out hover:[box-shadow:-1_-1_0_0] hover:-rotate-12 w-fit">
                    <p className='text-3xl'>{number}</p>
                </div>
                <div className=' w-96'>
                    <p className=' font-manrope font-semibold text-3xl'>{text}</p>
                </div>
            </div>
        </div>
    </>
  )
}
