import React from 'react'

type props = {
    item:{
        title:string,
        image:string,
        content:string
    }
}

export default function ChooseBox({item}:props) {
    return (
        <div className='flex items-center gap-x-4'>
            <img className='w-[55px] h-[55px]' src={item.image} alt={item.title}/>
            <div>
                <h3 className='text-[18px] font-[400] mb-1'>{item.title}</h3>
                <p className='text-[15px] text-Gray'>{item.content}</p>
            </div>
        </div>
    )
}
