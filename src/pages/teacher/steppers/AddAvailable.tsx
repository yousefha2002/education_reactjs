import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { IFormAvailable } from "../../../types/forms/IFormAvailable";
import CustomInput from "../../../components/ui/CustomInput";
import { BsTrashFill } from 'react-icons/bs';
import Steps from "../../../components/teacher/Steps";
import CustomSelect from "../../../components/ui/CustomSelect";

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
                            <CustomSelect
                            name={`days.${index}.day`}
                            register={register}
                            options={[
                                { title: "Monday", id: "1" },
                                { title: "Tuesday", id: "2" },
                            ]}
                            defaultValue={"2"}
                            getDisplayValue={(item) => item.title} // Use item.title for objects with a title property
                            getValue={(item) => item.id}
                            />
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