import { useForm ,SubmitHandler} from 'react-hook-form';
import { IFormProfile } from '../../types/forms/IFormProfile';
import CustomSelect from '../../components/ui/CustomSelect';
import CustomInput from '../../components/ui/CustomInput';
import timeZones from '../../utils/timeZones';

export default function StudentProfile() {
    const { handleSubmit, control,register, formState: { errors },} = useForm<IFormProfile>({
        defaultValues: {
            name:"",
            timeZone:"",
            email:"",
            level:""
        },
    });
    const onSubmit: SubmitHandler<IFormProfile> = (data) => console.log(data)

    return (
        <form className='OuterDiv' onSubmit={handleSubmit(onSubmit)}>
            <div className='InnerDiv'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <CustomInput 
                        label='Name' name='name' control={control} 
                        error={errors.name?.type==="required"?"This Filed is required":""} 
                        rules={{ required: true }} 
                        />
                    </div>
                    <div>
                        <CustomInput 
                        label='Email' name='email' control={control} 
                        error={errors.email?.type==="required"?"This Filed is required":""} 
                        rules={{ required: true }} 
                        />
                    </div>
                    <div>
                        <label className='mb-2 block'>Study Level</label>
                        <CustomSelect
                            name={"level"}
                            register={register}
                            options={[
                                    { title: "Monday", id: "1" },
                                    { title: "Tuesday", id: "2" },
                            ]}
                            defaultValue={"1"}
                            getDisplayValue={(item) => item.title}
                            getValue={(item) => item.id}
                        />
                    </div>
                    <div>
                        <label className='mb-2 block'>Time Zone</label>
                        <CustomSelect
                            name={"timeZone"}
                            register={register}
                            options={timeZones}
                            getDisplayValue={(item) => `${item.name} - ${item.timezone_offset}`}
                            defaultValue={"Bahrain"}
                            getValue={(item) => item.name}
                        />
                    </div>
                </div>
                <button className='Button bg-main text-white mt-6'>Save</button>
            </div>
        </form>
    )
}
