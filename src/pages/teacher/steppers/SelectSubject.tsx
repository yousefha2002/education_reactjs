import Steps from '../../../components/teacher/Steps';
import HeaderCol from '../../../components/singletutor/HeaderCol';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
    [key: string]: boolean;
}

export default function SelectSubject() {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: FormData) => {
        const selectedSubjects = Object.keys(data).filter((key) => data[key]);
        console.log(selectedSubjects);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Steps activeStep={1}>
            <div>
            <div className='grid grid-cols-3'>
                <HeaderCol title='#' />
                <HeaderCol title='Subject' />
                <HeaderCol title='Class' />
            </div>
            <div className='p-2 text-center'>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                    key={item}
                    className='grid grid-cols-3 text-Gray py-5 border-Border border-b'
                >
                    <div className='flex justify-center'>
                    <Controller
                        name={`${item}`}
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                        <input
                            type='checkbox'
                            {...field}
                            className='w-6 h-6 accent-main text-main bg-gray-100 border-gray-300 rounded'
                        />
                        )}
                    />
                    </div>
                    <span>Arabic</span>
                    <span>Grammar</span>
                </div>
                ))}
            </div>
            </div>
            <button type='submit' className='Button bg-main text-white mt-6'>
            Next
            </button>
        </Steps>
        </form>
    );
}