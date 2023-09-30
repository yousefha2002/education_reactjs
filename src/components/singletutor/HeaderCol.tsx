import React from 'react'

type props = {
    title:string,
    time?:string
}

export default function HeaderCol({title,time}:props) {
    return (
        <div className='px-1 py-[6px] bg-main text-white text-center'>
            <h4 className='mb-[2px]'>{title}</h4>
            <span className='text-[14px]'>{time}</span>
        </div>
    )
}
