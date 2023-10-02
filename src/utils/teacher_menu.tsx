import profile from '../images/student/profile.png'
import todayClass from '../images/student/administration.png'
import allclasses from '../images/student/videoconference.png'
import settings from '../images/student/gear.png'
import financial from '../images/student/financial-profit.png'

export default [ 
    {
        title:"Today Classes",
        link:"teacher/myclasses?show=today",
        icon:todayClass
    },
    {
        title:"All Classes",
        link:"teacher/myclasses",
        icon:allclasses
    },
    {
        title:"Profile",
        link:"teacher/signup/step1",
        icon:profile
    },
    {
        title:"Settings",
        link:"settings",
        icon:settings
    },
    {
        title:"Financial Record",
        link:"teacher/financial",
        icon:financial
    }
]