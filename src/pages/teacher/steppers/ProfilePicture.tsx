import { useState } from 'react';
import Steps from '../../../components/teacher/Steps'
import { BiSolidCloudUpload } from 'react-icons/bi';

export default function ProfilePicture() {
    const [image, setImage] = useState<File | undefined | null>();

    return (
        <Steps activeStep={2}>
            <div className="flex w-full h-[50vh] mt-16 justify-center bg-grey-lighter">
                <div>
                    <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                        <BiSolidCloudUpload className='text-[38px]'/>
                        <span className="mt-2 text-base leading-normal">Select a file</span>
                        <input onChange={(e)=>setImage((e.target as HTMLInputElement)?.files?.[0])} type='file' className="hidden" />
                    </label>
                    <div className='w-64 max-h-[300px] overflow-auto mt-6 flex'>
                        {image && <img src={URL.createObjectURL(image)} alt='person' />}
                    </div>
                </div>
            </div>
        </Steps>
    );
}
