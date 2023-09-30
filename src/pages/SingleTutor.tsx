import React from 'react'
import TutorCard from '../components/singletutor/TutorCard'
import Availability from '../components/singletutor/Availability'

export default function SingleTutor() {
    return (
        <div className='Container py-12 flex lg:flex-row flex-col items-start gap-6'>
            <TutorCard/>
            <Availability/>
        </div>
    )
}
