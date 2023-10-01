import React from 'react'
import { TableColumn } from '../../types/TableColumn';
import Table from '../../components/ui/Table';

type Lesson = {
    id:number,
    day:string,
    date:string,
    time:string,
    tutor:string
}

const data:Lesson[] = []

const columns: TableColumn<Lesson>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Day', accessor: "day" },
    {header:"Date" , accessor:"date"},
    {header:"Time" , accessor:"time"},
    {header:"Tutor" , accessor:"tutor"}
];

export default function StudentClasses() {
    return (
        <div className='OuterDiv'>
            <div className='InnerDiv'>
                <h3 className='mb-8 text-[22px] font-[600]'>My Classes</h3>
                <Table
                    data={data}
                    columns={columns}
                />
            </div>
        </div>
    )
}
