import React from 'react';
import CircleButtonSecondary from '../Buttons/CircleButtonSecondary';
import Image from 'next/image';

export default function ProjectsCard({title, description, image}) {
  return (
    <div className='flex flex-col bg-black'>
        <div className='hover:bg-purple hover:opacity-70'>
            <Image
                src={image}
                alt='image'
                width={500} // Add width and height for better performance and layout stability
                height={300} // Adjust as needed
            />
        </div>
        <div className='flex items-center justify-between px-5 py-7 max-h-40'>
            <div className='flex-col text-white'>
                <div>
                    <p className='text-3xl font-manrope'>{title}</p>
                </div>
                <div className='text-xl font-manrope'>
                    <p>{description}</p>
                </div>
            </div>
            <div className='flex-none'>
                <CircleButtonSecondary/>
            </div>
        </div>
    </div>
  );
}
