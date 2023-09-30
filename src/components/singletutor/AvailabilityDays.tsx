import HeaderCol from './HeaderCol'
import TableCell from './TableCell'

export default function AvailabilityDays() {
    return (
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 mt-6 gap-y-2'>
            {
                [1,2,3,4,5,6,7].map(item=>
                    {
                        return(
                            <div>
                                <HeaderCol key={item} title="Sunday"/>
                                <div className='border-l border-Border px-3'>
                                    {
                                        [1,2,3,4,5].map(item=><TableCell key={item}/>)
                                    }
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}