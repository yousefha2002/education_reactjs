import Steps from '../../../components/teacher/Steps'
import { useForm ,SubmitHandler, Controller} from 'react-hook-form';
import { IFormDescription } from '../../../types/forms/IFormDescription';
import CustomSelect from '../../../components/ui/CustomSelect';
import timeZones from '../../../utils/timeZones';
import CustomInput from '../../../components/ui/CustomInput';

export default function Description() {
    const { handleSubmit, control,register} = useForm<IFormDescription>({
        defaultValues: {
            description:"",
            price:0.00,
            timeZone:""
        },
    });

    const onSubmit: SubmitHandler<IFormDescription> = (data) => console.log(data)


    return (
        <Steps activeStep={3}>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[95%] mx-auto my-5'>
                <label className='block text-Gray mb-2 text-[15px]'>Description</label>
                <Controller
                    control={control}
                    {...register("description", { required: true })} 
                    render={({ field }) => <textarea rows={4} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...field}
                    autoComplete='off'></textarea>
                    }
                />
                <div className='my-6'>
                    <label className='mb-2 block text-Gray text-[15px]'>Time Zone</label>
                    <CustomSelect
                    name={"timeZone"}
                    register={register}
                    options={timeZones}
                    getDisplayValue={(item) => `${item.name} - ${item.timezone_offset}`}
                    getValue={(item) => item.name}
                    />
                </div>
                <div>
                    <CustomInput
                        label='Pirce per hour' name='price' type='number' control={control} 
                        rules={{ required: true }} 
                    />
                </div>
                <button className='Button text-white bg-main mt-3'>
                    Next
                </button>
            </form>
        </Steps>
    )
}
