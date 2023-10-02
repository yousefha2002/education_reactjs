import React from 'react'
import TutorBox from '../../components/TutorBox'
import AdminLayout from '../../components/admin/layout/Admin.Layout'

export default function TeachersViewAdmin() {
    return (
        <AdminLayout>
            <div>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-6'>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map(item=><TutorBox key={item}/>)
                    }
                </div>
            </div>
        </AdminLayout>
    )
}
