import React from 'react'
import image from '../../images/education.png'
import { useForm,SubmitHandler } from 'react-hook-form';
import { IFormStudentSignup } from '../../types/forms/IFormStudentSignup';
import CustomInput from '../../components/ui/CustomInput';
import CustomSelect from '../../components/ui/CustomSelect';
import timeZones from '../../utils/timeZones';
import { Link } from 'react-router-dom';

export default function StudentSignup() {
    const { handleSubmit, control,register, formState: { errors },} = useForm<IFormStudentSignup>({
        defaultValues: {
            name:"",
            timeZone:"",
            email:"",
            level:"",
            password:"",
            gedner:""
        },
    });
    const onSubmit: SubmitHandler<IFormStudentSignup> = (data) => console.log(data)
    return (
        <div className='grid lg:grid-cols-2 items-center gap-x-4 Container my-8'>
            <div>
                <h3 className='text-[24px] mb-5 font-[500]'>Registration for students</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-6'>
                        <CustomInput 
                                label='Name' name='name' control={control} 
                                error={errors.name?.type==="required"?"This Filed is required":""} 
                                rules={{ required: true }} 
                            />
                    </div>
                    <div className='mb-6'>
                        <label className='mb-2 block'>Study Level</label>
                        <CustomSelect
                            name={"level"}
                            register={register}
                            options={[
                                { title: "Monday", id: "1" },
                                { title: "Tuesday", id: "2" },
                            ]}
                            defaultValue={"2"}
                            getDisplayValue={(item) => item.title}
                            getValue={(item) => item.id}
                        />
                    </div>
                    <div className='mb-6'>
                        <CustomInput 
                            type='email'
                            label='Email' name='email' control={control} 
                            error={errors.email?.type==="required"?"This Filed is required":""} 
                            rules={{ required: true }} 
                        />
                    </div>
                    <div className='mb-6'>
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
                    <div className='mb-6'>
                        <label className='mb-2 block'>Gender</label>
                        <CustomSelect
                            name={"gender"}
                            register={register}
                            options={[
                                { title: "Male",id:"male" },
                                { title: "Female",id:"female"},
                            ]}
                            getDisplayValue={(item) => item.title}
                            getValue={(item) => item.id}
                        />
                    </div>
                    <div className='mb-6'>
                        <CustomInput 
                            type='password'
                            label='Password' name='password' control={control} 
                            error={errors.password?.type==="required"?"This Filed is required":""} 
                            rules={{ required: true }} 
                        />
                    </div>
                    <button className='Button bg-main text-white mt-3 w-full mb-4'>Signup</button>
                    <h3 className='text-Gray text-[15px] text-center mb-1'>Already have an account? <Link to={'/login'} className='text-main underline'>Login</Link></h3>
                    <Link to={'/teacher/signup'}
                    className='text-center text-main text-[15px] block underline'>Sign up as a teacher</Link>
                </form>
            </div>
            <div>
                <img src={image} alt='banner' className='lg:block hidden'/>
            </div>
        </div>
    )
}