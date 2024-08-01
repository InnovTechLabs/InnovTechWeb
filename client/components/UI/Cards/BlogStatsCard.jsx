import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage, faCalendar, faUser} from "@fortawesome/free-regular-svg-icons"

export default function BlogStatsCard({author, date, comments}) {
  return (
    <>
    <div className='flex flex-row bg-yellow [box-shadow:5_5_0_0#120A21] w-fit px-10 py-5 space-x-10'>
        <div className='flex space-x-3 items-center'>
            <FontAwesomeIcon icon = {faUser}/>
            <p>{author}</p>
        </div>
        <div className='flex space-x-3 items-center'>
            <FontAwesomeIcon icon = {faCalendar}/>
            <p>{date}</p>
        </div>
        <div className='flex space-x-3 items-center'>
            <FontAwesomeIcon icon = {faMessage}/>
            <p>Comments ({comments})</p>
        </div>
    </div>
    </>
  )
}
