import React from 'react'
import Line from '../ui/Line'
import AvailabilityDays from './AvailabilityDays'

export default function Availability() {
    return (
        <div className='bg-white p-4 shadow-md flex-1'>
            <h3 className='text-[24px] font-[600] mb-3'>Availability</h3>
            <p className='text-Gray md:text-[16px] text-[14px] mb-2'>
            You can find the available class times for the teacher that can be booked. We hope to book the appropriate times for you
            </p>
            <Line/>
            <div className='my-2'>
                <h3 className='mb-1'><span className='text-secondary font-[600]'>Subject</span> : Science</h3>
                <h3><span className='text-secondary font-[600]'>Price per hour</span> : 10$</h3>
            </div>
            <p className='mb-2'>
            After choosing the class times for the week, the system will automatically record the same times for the following weeks
            </p>
            <Line/>
            <AvailabilityDays/>
        </div>
    )
}
