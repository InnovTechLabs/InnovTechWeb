import React from 'react';
import Image from 'next/image';
import facebook from "@/public/assets/images/icon/facebook.svg"
import instagram from "@/public/assets/images/icon/instagram.svg"
import twitter from "@/public/assets/images/icon/twitter.svg"
import linkedin from "@/public/assets/images/icon/linkedin.svg"
import CircleLinkButton from "@/components/UI/Buttons/CircleLinkButton"

export default function TeamMemberCard({image, name, title}) {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative overflow-hidden group transition-all duration-500 hover:[box-shadow:5_5_0_0#120A21]'>
        <div className='transition-transform duration-1000 ease-in-out group-hover:scale-125'>
          <Image
            src={image}
            alt='client1'
            width={200}
            height={300} // Set height for the image
            className="w-full h-auto"
          />
        </div>
        <div className='absolute flex justify-around bottom-5 w-full bg-white p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 '>
                <CircleLinkButton image={facebook}/>
                <CircleLinkButton image={instagram}/>
                <CircleLinkButton image={twitter}/>
                <CircleLinkButton image={linkedin}/>
        </div>
      </div>
      <div className='flex flex-col text-center mt-2'>
        <p>{name}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}
