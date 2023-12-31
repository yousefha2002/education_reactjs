import profile from '../images/student/profile.png'
import todayClass from '../images/student/administration.png'
import allclasses from '../images/student/videoconference.png'
import settings from '../images/student/gear.png'
import picture from '../images/student/pictures.png'
import financial from '../images/student/financial-profit.png'

export default [ 
    {
        title:"Today Classes",
        link:"student/myclasses?show=today",
        icon:todayClass
    },
    {
        title:"All Classes",
        link:"student/myclasses",
        icon:allclasses
    },
    {
        title:"Profile",
        link:"student/profile",
        icon:profile
    },
    {
        title:"Settings",
        link:"settings",
        icon:settings
    },
    {
        title:"Photo",
        link:"student/photo",
        icon:picture
    },
    {
        title:"Financial Record",
        link:"student/financial",
        icon:financial
    }
]