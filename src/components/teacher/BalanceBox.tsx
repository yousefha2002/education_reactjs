import React from 'react'

type props = {
    title:string,
    number:number
}

export default function BalanceBox({title,number}:props) {
    return (
        <div className='flex flex-col items-center'>
            <h4 className='mb-2'>{title}</h4>
            <h3 className='text-[28px]'>{number}</h3>
        </div>
    )
}
