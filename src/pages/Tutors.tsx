import React from 'react'
import TutorBox from '../components/TutorBox'

export default function Tutors() {
    return (
        <div className='Container py-8'>
            <h3 className='font-[500] text-[18px] pb-2 border-b border-Border'>Search Results: 117 Tutors</h3>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-6'>
                {
                    [1,2,3,4,5,6,7,8,9,10].map(item=><TutorBox key={item}/>)
                }
            </div>
        </div>
    )
}
