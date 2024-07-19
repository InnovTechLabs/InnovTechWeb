import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function CircleButtonSecondary() {
  return (
    <div className='bg-white [box-shadow:5_5_0_0#FFD80D] rounded-full px-4 py-3 transition-all delay-50 ease-in-out hover:bg-yellow hover:[box-shadow:5_5_0_0#9664FF]'>
        <FontAwesomeIcon icon={faArrowRight} size='lg'/>
    </div>
  )
}
