import profile from '../images/student/profile.png'
import todayClass from '../images/student/administration.png'
import allclasses from '../images/student/videoconference.png'
import settings from '../images/student/gear.png'
import picture from '../images/student/pictures.png'

export default [ 
    {
        title:"Today Classes",
        link:"student/myclass?show=today",
        icon:todayClass
    },
    {
        title:"All Classes",
        link:"student/myclass",
        icon:allclasses
    },
    {
        title:"Profile",
        link:"student/profile",
        icon:profile
    },
    {
        title:"Settings",
        link:"student/settings",
        icon:settings
    },
    {
        title:"Photo",
        link:"student/photo",
        icon:picture
    }
]