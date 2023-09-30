import React from 'react'
import student_menu from '../../utils/student_menu'
import MenuBox from '../../components/student/MenuBox'

export default function StudentDashboard() {
    return (
        <div className='OuterDiv'>
            <div className='InnerDiv grid grid-cols-4 gap-4'>
                {
                    student_menu.map(item=><MenuBox item={item}/>)
                }
            </div>
        </div>
    )
    }
