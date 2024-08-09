import React from 'react';

export default function InputBoxSecondary({ type, placeholder, onChange, value, name }) {
  return (
    <input
      type={type}
      className='w-full text-black px-3 py-3 transition-all ease-in-out duration-100 focus:outline focus:outline-1 focus:outline-purple'
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
}
