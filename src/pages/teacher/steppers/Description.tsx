import Steps from '../../../components/teacher/Steps'
import { useForm ,SubmitHandler, Controller} from 'react-hook-form';
import { IFormDescription } from '../../../types/forms/IFormDescription';

export default function Description() {
    const { handleSubmit, control,register, formState: { errors },} = useForm<IFormDescription>({
        defaultValues: {
            description:""
        },
    });

    const onSubmit: SubmitHandler<IFormDescription> = (data) => console.log(data)


    return (
        <Steps activeStep={3}>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[95%] mx-auto my-5'>
                <label className='block mb02 text-Gray mb-2'>Description</label>
                <Controller
                    control={control}
                    {...register("description", { required: true })} 
                    render={({ field }) => <textarea rows={4} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...field}
                    autoComplete='off'></textarea>
                    }
                    />
                <button className='Button text-white bg-main mt-3'>
                    Next
                </button>
            </form>
        </Steps>
    )
}
