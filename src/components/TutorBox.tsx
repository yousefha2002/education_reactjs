import { Link } from 'react-router-dom'

export default function TutorBox() {
    return (
            <div className='flex items-center flex-col p-4 border border-Border'>
                <img src='https://mui.com/static/images/avatar/1.jpg' alt='person'
                className='w-[120px] h-[120px] rounded-[50%] mb-4'/>
                <h3 className='text-[20px] font-[600] mb-2'>Yousef HA</h3>
                <p className='text-[14px] text-Gray text-center mb-6'>
                خبره ٥ سنوات في تدريس الرياضيات والماث للمرحلة الابتدائية والمتوسطة والصف الأول الثانوي وكذلك الاحصاء.
                </p>
                <Link to={`/tutor/1`} className='Button bg-main text-white'>View profile</Link>
            </div>
    )
}
