import MenuBox from '../../components/student/MenuBox'
import teacher_menu from '../../utils/teacher_menu'

export default function TeacherDashboard() {
    return (
        <div className='OuterDiv'>
            <div className='InnerDiv grid grid-cols-4 gap-4'>
                {
                    teacher_menu.map(item=><MenuBox item={item}/>)
                }
            </div>
        </div>
    )
    }
