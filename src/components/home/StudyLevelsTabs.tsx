import React from 'react'
import Tabs from '../ui/Tabs'
import Tab from '../ui/Tab'
import Heading from '../ui/heading/Heading'
import SubjectBox from './SubjectBox'

export default function StudyLevelsTabs() {
    return (
        <div className='my-8 bg-white '>
            <div className='Container py-12 bg-white'>
                <div className='Title'>
                    Select your <Heading>Study level</Heading>
                </div>
                <Tabs>
                    {
                        ["Primary","Average","Secondary","International"].map((item)=>{
                            return(
                                <Tab key={item} label={item}>
                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            Array.from({ length: 20 }).map((_,index)=><SubjectBox key={index}/>)
                                        }
                                    </div>
                                </Tab>
                            )
                        })
                    }
                </Tabs>
            </div>
        </div>
    )
}
