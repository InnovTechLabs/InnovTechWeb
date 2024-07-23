import React from 'react'

export default function InputBox({type, placeholder}) {
  return (
    <>
        <input type={`${type}`} className='w-full text-black focus:text-white px-3 py-3 transition-all ease-in-out duration-100 focus:outline-none focus:bg-black focus:[box-shadow:5px_5px_0_0_#9664FF] outline outline-1 outline-black' placeholder={`${placeholder}`} />
    </>
  )
}
