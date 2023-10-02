import Table from "../../components/ui/Table";
import { TableColumn } from "../../types/TableColumn";

type Financial = {
    id:number,
    date:string,
    price:string,
    tutor:string
}

const data:Financial[] = []

const columns: TableColumn<Financial>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Date of payment', accessor: "date" },
    {header:"Price" , accessor:"price"},
    {header:"Tutor" , accessor:"tutor"},
];
export default function StudentFinancial() {
    return (
        <div className='OuterDiv'>
            <div className='InnerDiv'>
                <h3 className='mb-8 text-[22px] font-[600]'>Financial Record</h3>
                <Table
                    data={data}
                    columns={columns}
                />
            </div>
        </div>
    )
}
