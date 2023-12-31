import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { BsList } from 'react-icons/bs';

type props =  {
    onToggle?: () => void;
    isAdmin?:boolean
}

export default function Navbar({onToggle,isAdmin}:props) {
    return (
        <nav className="bg-white border-gray-200 py-2 shadow">
            <div className="flex flex-wrap items-center justify-between Container">
                <div className='flex'>
                    {
                    isAdmin && 
                    <button className="text-black text-[22px] md:hidden" onClick={onToggle}>
                        <BsList/>
                    </button>
                    }
                    <Link to={'/'}><img src={logo} alt='logo' className='w-[100px] h-[60px]'/></Link>
                </div>
                <div className='flex gap-x-3 items-center'>
                    <Link to={'/login'} className='Button bg-main text-white'>Login</Link>
                    <Link to={'/student/signup'} className='Button border border-main shadow text-main'>Register</Link>
                </div>
            </div>
            </nav>
    )
}
