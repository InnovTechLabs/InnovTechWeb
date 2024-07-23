import React from 'react'

export default function TextArea({placeholder, rows}) {
  return (
    <>
        <textarea 
          placeholder={`${placeholder}`} 
          rows={rows} 
          className='w-full text-black focus:text-white  px-3 py-3 transition-all ease-in-out duration-100 focus:outline-none focus:bg-black focus:[box-shadow:5_5_0_0_#9664FF] outline outline-1 outline-black'/>
    </>
  )
}
