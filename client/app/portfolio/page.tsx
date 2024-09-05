import Navbar from '@/components/Navbar';
import React from 'react';
import Image from 'next/image';
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard';

import imgStyle from "@/public/styles/speechbubble.module.css";
import markinner from "@/public/assets/images/mark/mark-inner-page.png";
import ProjectsCard from '@/components/UI/Cards/ProjectsCard';
import { projects } from '@/static/Projects';
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';
import StaticButton from '@/components/UI/Buttons/StaticButton';

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col space-y-10 py-10 md:flex-row justify-around items-center px-10'>
        <div>
          <CurrentPageCard text={"Portfolio"} parent={"Home"} child={"Portfolio"} />
        </div>
        <div className={`${imgStyle['']}`}>
          <Image
            src={markinner}
            alt='markinner'
          />
        </div>
      </div>
      
      <div className='bg-white space-y-10 py-10'>
        <div className='flex flex-row justify-center items-center'>
          <StaticButton text={"Latest Works"}/>
        </div>
        <p className='text-4xl font-bold text-center'>We’ve Done 2560+ Global Projects Take a Looks Work Gallery</p>
        <div className='flex flex-col justify-center items-center'>
          {/* Container for the project cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-10'>
            {projects.map((project) => (
              <div key={project.id}>
                <ProjectsCard title={project.title} description={project.description} image={project.image} />
              </div>
            ))}
          </div>
        </div>
        <NewsLetter/>
        <Footer/>
      </div>
    </>
  );
}
