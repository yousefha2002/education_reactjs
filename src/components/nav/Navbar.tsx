import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 py-2 shadow">
            <div className="flex flex-wrap items-center justify-between Container">
                <Link to={'/'}><img src={logo} alt='logo' className='w-[100px] h-[60px]'/></Link>
                <div className='flex gap-x-3 items-center'>
                    <button>
                        <img alt='logo' src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png" className="w-7 h-7" />
                    </button>
                    <button className='Button bg-main text-white'>Login</button>
                    <button className='Button border border-main shadow text-main'>Register</button>
                </div>
            </div>
            </nav>
    )
}
