import React from 'react'
import skillsliderstyle from "@/public/styles/skillslider.module.css"

export default function SkillSlider({text, value}) {
  return (
    <>
    <div className='flex justify-between items-center'>
        <p>{text}</p>
        <p>{value}%</p>
    </div>
    <div>
        <div class={`${skillsliderstyle['slidercontainer']}`}>
            <div class={`${skillsliderstyle['slider']}`} style={{"width" : `${value}%`}}></div>
        </div>
    </div>
    </>
  )
}
