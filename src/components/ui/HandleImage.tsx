import React, { useState } from 'react'
import { BiSolidCloudUpload } from 'react-icons/bi';

export default function HandleImage() {
    const [image, setImage] = useState<File | undefined | null>();

    return (
        <div>
            <label className="w-64 flex flex-col items-center px-4 py-6 text-blue rounded-lg tracking-wide uppercase cursor-pointer">
                <BiSolidCloudUpload className='text-[38px]'/>
                <span className="mt-2 text-base leading-normal">Select a file</span>
                <input onChange={(e)=>setImage((e.target as HTMLInputElement)?.files?.[0])} type='file' className="hidden" />
            </label>
            <div className='w-64 max-h-[300px] overflow-auto mt-6 flex'>
                {image && <img src={URL.createObjectURL(image)} alt='person' />}
            </div>
        </div>
    )
}
