import { useForm ,SubmitHandler} from 'react-hook-form';
import { IFormProfile } from '../../types/forms/IFormProfile';
import CustomInput from '../../components/ui/CustomInput';
import { IFormSettings } from '../../types/forms/IFormSettings';

export default function StudentSettings() {
    const { handleSubmit, control,register, formState: { errors },} = useForm<IFormSettings>({
        defaultValues: {
            oldPassword:"",
            newPassword:"",
        },
    });
    const onSubmit: SubmitHandler<IFormSettings> = (data) => console.log(data)

    return (
        <form className='OuterDiv' onSubmit={handleSubmit(onSubmit)}>
            <div className='InnerDiv'>
                    <div className='mb-6'>
                        <CustomInput 
                        label='Old Password' name='oldPassword' control={control} 
                        error={errors.oldPassword?.type==="required"?"This Filed is required":""} 
                        rules={{ required: true }} 
                        />
                    </div>
                    <div>
                        <CustomInput 
                        label='New Password' name='newPassword' control={control} 
                        error={errors.newPassword?.type==="required"?"This Filed is required":""} 
                        rules={{ required: true }} 
                        />
                    </div>
                    <button className='Button bg-main text-white mt-6'>Save</button>
                </div>
        </form>
    )
}