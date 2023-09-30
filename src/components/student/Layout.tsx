import React, { ReactNode } from 'react'
import student_parts from '../../utils/student_parts'
import { Link } from 'react-router-dom'

export default function Layout({children}:{children:ReactNode}) {
    return (
        <div className='Container my-6'>
            <div className='flex items-center'>
                {
                    student_parts.map(item=>{
                        return(
                            <Link to={`/student/${item.link}`}>
                                <div className='p-2'>
                                    {item.title}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            {children}
        </div>
    )
}
