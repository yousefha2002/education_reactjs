import { AiOutlineClose ,AiFillHome} from 'react-icons/ai';
import {RiGraduationCapFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';

type props = {
    isOpen: boolean;
    onClose: () => void;
}

const AdminSidebarBox  = ({ isOpen, onClose }:props) => {
    const links = [
        {
            id:1,
            title:"Control Board",
            url:"/admin",
            icon:AiFillHome
        },
        {
            id:1,
            title:"Study Levels",
            url:"/admin/levels",
            icon:RiGraduationCapFill
        }
    ]
    return (
        <div className='md:relative md:block md:w-1/4 lg:w-1/6'>
            <div
            className={`fixed inset-y-0 left-0 w-[60%] md:w-1/4 lg:w-1/6 bg-white shadow z-50 transition-transform md:transition-none transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            >
            <button
                className="md:hidden absolute top-4 right-2 text-[#0000008a]"
                onClick={onClose}
            >
                <AiOutlineClose/>
            </button>
            <div className="p-4   mt-[76px] border-t-[1px] border-t-gray-300">
                <ul className="list-none">
                    {
                        links.map(link=>{
                            return <Link to={`${link.url}`} key={link.id+"admin"} className='mb-5 block'>
                            <li className="flex items-center mb-2 gap-4">
                                <link.icon className="mr-2 text-gray-500 text-[22px]" />
                                <span className="text-black">{link.title}</span>
                            </li>
                        </Link>
                        })
                    }
                </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebarBox;