import React from 'react';
import Image from 'next/image';
import { companies } from "@/static/Companies";
import style from "@/public/styles/slideranimate.module.css";

export default function CompaniesSlider() {
  const duplicatedCompanies = [...companies, ...companies]; // Duplicate the array

  return (
    <div className='bg-purple [box-shadow:5_5_0_0#120A21] p-4 py-24'>
      <div className={style.scroll}>
        <div className={`${style.mscroll} ${style['scroll-content']} space-x-5`}>
          {duplicatedCompanies.map((c, index) => (
            <div className={`bg-white rounded-lg px-10 py-10 w-64 `} key={index}>
              <Image src={c} alt='c' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
