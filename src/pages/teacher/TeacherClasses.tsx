import { TableColumn } from '../../types/TableColumn';
import Table from '../../components/ui/Table';

type Lesson = {
    id:number,
    day:string,
    date:string,
    time:string,
    student:string
}

const data:Lesson[] = []

const columns: TableColumn<Lesson>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Day', accessor: "day" },
    {header:"Date" , accessor:"date"},
    {header:"Time" , accessor:"time"},
    {header:"Student" , accessor:"student"}
];

export default function TeacherClasses() {
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