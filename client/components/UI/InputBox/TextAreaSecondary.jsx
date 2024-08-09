import React from 'react'

export default function TextAreaSecondary({rows, placeholder, onChange, value, name}) {
  return (
    <>
        <textarea 
          placeholder={`${placeholder}`} 
          rows={rows} 
          className='w-full text-black px-3 py-3 transition-all ease-in-out duration-100 focus:outline focus:outline-1 focus:outline-purple'
          onChange={onChange}
          name={name}
          value={value}
        />
    </>
  )
}
