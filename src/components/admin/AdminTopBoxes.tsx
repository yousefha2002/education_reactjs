import React from 'react'
import {PiStudentFill} from 'react-icons/pi'
import {GiTeacher} from 'react-icons/gi'
import {MdBalance,MdOutlinePlayLesson} from 'react-icons/md'

function AdminTopBoxes() {
    const data = [
        {
            id:1,
            title:"total students",
            icon:PiStudentFill,
            number:1,
            bg:"bg-blue-500"
        },
        {
            id:2,
            title:"total teachers",
            icon:GiTeacher,
            number:20,
            bg:"bg-orange-500"
        },
        {
            id:3,
            title:"total balance",
            icon:MdBalance,
            number:100,
            bg:"bg-red-500"
        },
        {
            id:4,
            title:"registered booking",
            icon:MdOutlinePlayLesson,
            number:2,
            bg:"bg-purple-500"
        }
    ]
  return (
    <div className='grid grid-cols-4 gap-5'>
        {
            data.map(da=>{
                return <div key={da.id+"board"} className={`${da.bg} px-4 py-7 rounded shadow flex gap-3 items-center`}>
                    <div className='w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center'>
                        <da.icon className='text-[28px]'/>
                    </div>
                    <div className='text-white'>
                        <h4 className=' font-[400] capitalize text-[17px]'>{da.title}</h4>
                        <p className=' font-bold text-[20px]'>{da.number}</p>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default AdminTopBoxes