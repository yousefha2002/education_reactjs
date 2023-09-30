import React from 'react'

export default function TutorCard() {
    return (
        <div className='bg-white p-4 shadow-md flex flex-col items-center w-full lg:w-[30%] xl:w-[20%]'>
            <img src='https://mui.com/static/images/avatar/1.jpg' alt='person'
            className='w-[120px] h-[120px] rounded-[50%] mb-4'/>
            <h3 className='text-[20px] font-[600] mb-2'>Yousef HA</h3>
            <p className='text-[15px] text-Gray text-center'>
            خبره ٥ سنوات في تدريس الرياضيات والماث للمرحلة الابتدائية والمتوسطة والصف الأول الثانوي وكذلك الاحصاء.
            </p>
        </div>
    )
}
