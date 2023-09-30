import React from 'react'
import { Link } from 'react-router-dom'

export default function SubjectBox() {
    return (
        <Link to={`/select-tutor/subject/1`}>
            <div className='px-3 py-1 bg-white shadow border border-main rounded-[20px] 
            hover:bg-main hover:text-white hover:border-transparent duration-300'>
                arabic
            </div>
        </Link>
    )
}
