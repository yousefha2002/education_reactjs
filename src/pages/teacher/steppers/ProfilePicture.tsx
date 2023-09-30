import Steps from '../../../components/teacher/Steps'
import HandleImage from '../../../components/ui/HandleImage';

export default function ProfilePicture() {

    return (
        <Steps activeStep={2}>
            <div className="flex w-full h-[50vh] mt-16 justify-center bg-grey-lighter">
                <HandleImage/>
            </div>
        </Steps>
    );
}