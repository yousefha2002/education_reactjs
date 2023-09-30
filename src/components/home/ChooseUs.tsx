import Heading from '../ui/heading/Heading'
import icon1 from '../../images/home/clock.png'
import icon2 from '../../images/home/book-stack.png'
import icon3 from '../../images/home/lecture.png'
import icon4 from '../../images/home/rating.png'
import icon5 from '../../images/home/programmer.png'
import icon6 from '../../images/home/mental-health.png'

import ChooseBox from './ChooseBox'

const data = [
    {
        title:"Time",
        image:icon1,
        content:"Flexible choice of class time"
    },
    {
        title:"Experts",
        image:icon4,
        content:"We have over 2,000 professional experts who are ready to help you"
    },
    {
        title:"Teaching",
        image:icon3,
        content:"Explanation of lessons, recitation, homework assistance"
    },
    {
        title:"Variety of subjects",
        image:icon2,
        content:"We offer different subjects to choose from"
    },
    {
        title:"Ivesting",
        image:icon5,
        content:"Provides a unique and individual learning experience"
    },
    {
        title:"Habits",
        image:icon6,
        content:"Increases good study habits"
    }
]

export default function ChooseUs() {
    return (
        <div className='Container my-16'>
            <div className='Title'><Heading>Why</Heading>Choose Us</div>
            <div className='grid grid-cols-2 gap-x-2 gap-y-10'>
                {
                    data.map((item,index)=><ChooseBox item={item} key={index}/>)
                }
            </div>
        </div>
    )
}
