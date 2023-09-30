import React from 'react'
import { Link } from 'react-router-dom'

type props = {
    item:{
        title:string,
        icon:string,
        link:string
    }
}

export default function MenuBox({item}:props) {
    return (
        <Link to={`/${item.link}`}>
            <div className='p-4 bg-[#F4f4f4] rounded-md'>
                <img src={item.icon} alt={item.title} className='w-[65px] h-[65px] mb-4'/>
                <h3 className='text-main text-[18px] font-[500]'>{item.title}</h3>
            </div>
        </Link>
    )
}
