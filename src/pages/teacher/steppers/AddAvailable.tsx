import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { IFormAvailable } from "../../../types/forms/IFormAvailable";
import CustomInput from "../../../components/ui/CustomInput";
import { BsTrashFill } from 'react-icons/bs';
import Steps from "../../../components/teacher/Steps";

export default function AddAvailable() {
const {
    handleSubmit,
    control,
    register,
    } = useForm<IFormAvailable>({
        defaultValues: {
        days:[{day:"1",time:"08:26"}]
        },
    });

    const onSubmit: SubmitHandler<IFormAvailable> = (data) => console.log(data);

    const { fields, append, remove } = useFieldArray({
        name: "days",
        control
    });

    return (
        <Steps activeStep={4}>
            <div className='Container my-12'>
            <button className='Button bg-secondary text-white' 
            onClick={() =>
                    append({
                    day: "1",
                    time: "08:26"
                    })
                }>Add Available time</button>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    fields.map((field,index)=>
                    {
                        return(
                            <div key={field.id} className='my-6 flex items-start gap-x-4'>
                            <select
                                {...register(`days.${index}.day`, { required: true })}
                                className='bg-gray-50 border max-h-[100px] border-Border text-gray-900 text-md duration-300 rounded-[2px] outline-none focus:ring-Primary focus:border-Primary block w-full p-2'
                            >
                                {[1, 2, 3, 4, 5].map((item) => (
                                <option className=' capitalize' key={item} value={item}>
                                    {item}
                                </option>
                                ))}
                            </select>
                            <CustomInput
                                name={`days.${index}.time`}
                                control={control}
                                type="time"
                                defaultValue={''}
                            />
                            <button className="py-2 text-secondary" onClick={() => remove(index)}><BsTrashFill/></button>
                        </div>
                        )
                    })
                }
                <button type="submit" className="Button bg-main text-white mt-8">Save</button>
            </form>
            </div>
        </Steps>
    );
}
