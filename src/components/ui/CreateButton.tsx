import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { motion } from "framer-motion"


type props = {
  handleOpen:()=>void
}

function CreateButton({handleOpen}:props) {
  return (
    <div className='flex justify-end mb-5'>
        <motion.button
        whileHover={{scale:0.92}} whileTap={{scale:1.08}}
        onClick={handleOpen}
        className=' bg-main text-white w-[40px] h-[30px] rounded-md flex items-center justify-center text-[22px] font-bold hover:bg-opacity-80'>
            <AiOutlinePlus/>
        </motion.button>
    </div>
  )
}

export default CreateButton