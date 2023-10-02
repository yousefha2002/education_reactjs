import { useForm ,SubmitHandler} from 'react-hook-form';
import { IFormLevel } from '../../types/forms/LevelForm';
import CustomInput from '../ui/CustomInput';
import { motion } from "framer-motion"

type props = {
    handleClose:()=>void,
}

export default function CreateBox({handleClose}:props) {
    const { handleSubmit, control,register, formState: { errors },} = useForm<IFormLevel>({
        defaultValues: {
            titleAr:"",
            titleEn:""
        },
    });

    const onSubmit: SubmitHandler<IFormLevel> = (data) => {
        console.log(data);
        handleClose();
    }


    return (
            <form onSubmit={handleSubmit(onSubmit)} className='w-[95%] mx-auto my-5'>
                <div className='mb-5'>
                    <CustomInput label='Arabic Title' name='titleAr' control={control} 
                    error={errors.titleAr?.type==="required"?"This Filed is required":""} rules={{ required: true }} placeholder='Enter title'
                    />
                </div>
               <div className='mb-5'>
                <CustomInput label='English Title' name='titleEn' control={control} 
                    error={errors.titleEn?.type==="required"?"This Filed is required":""} rules={{ required: true }} placeholder='Enter title'
                    />
               </div>
                <motion.button 
                whileHover={{scale:0.98}} whileTap={{scale:1.08}}
                className='Button text-white bg-main mt-3' type='submit'>
                    Create
                </motion.button>
            </form>
    )
}
