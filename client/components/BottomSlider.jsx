import React, { useEffect, useState } from 'react'
import ProjectsCard from './UI/Cards/ProjectsCard'
import { projects } from '@/static/Projects'

export default function BottomSlider() {

  const [activeContentIndex, setActiveContentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextContent();
    }, 2000)

    return() => {
      clearTimeout(timer)
    }

  },[activeContentIndex, projects])


  const handleNextContent = () => {
    setActiveContentIndex((activeContentIndex + 3) % projects.length)
  }

  const handlePreviousContent = () => {
    setActiveContentIndex(activeContentIndex === 0 ? projects.length - 3 : activeContentIndex - 3)
  }

  const getDisplayIndices = (index) => {
    const secondIndex = (index + 1) % projects.length;
    const thirdIndex = (index + 2) % projects.length;
    return [index, secondIndex, thirdIndex];
  }

  const [firstIndex, secondIndex, thirdIndex] = getDisplayIndices(activeContentIndex);

  return (
    <>
      <div className={`flex-col justify-center items-center`}>
        <div className='md:flex justify-center space-x-5 px-10 space-y-5 md:space-y-0'>
          {projects.map((project, index) => (
              <div key={project.id} className={(index === firstIndex || index === secondIndex || index === thirdIndex) ? "block" : "hidden"}>
                  <ProjectsCard title = {project.title} description={project.description} image={project.image}/>
              </div>
          ))}
        </div>
      </div>
    </>
  )
}
