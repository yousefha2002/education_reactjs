import image from '../../images/home/banner.svg'
import Heading from '../ui/heading/Heading'

export default function Banner() {
    return (
        <div className='Container flex justify-center items-center py-12 lg:flex-row flex-col gap-x-4'>
            <div>
                <div className='mb-5 text-[32px] md:text-[40px] font-[500]'><Heading>Marhaba!</Heading></div>
                <h3 className='mb-3 font-[400] text-[20px] md:text-[24px]'>Private distance teaching</h3>
                <p className='text-Gray text-[15px]'>We provide teachers in all specializations for all educational levels</p>
            </div>
            <img src={image} alt='banner' className='xl:w-[700px] lg:w-[550px]'/>
        </div>
    )
}
