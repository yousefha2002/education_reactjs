import React from 'react'
import Heading from '../ui/heading/Heading'
import Accordion from '../ui/Accordion'

export default function FrequentlyQuestions() {
    return (
        <div className='bg-white my-8'>
            <div className='Container py-10'>
                <div className='Title'><Heading>Frequently </Heading>Questions</div>
                <div className='space-y-4'>
                    {
                        [1,2,3,4,5].map(item=><Accordion key={item}/>)
                    }
                </div>
            </div>
        </div>
    )
}
