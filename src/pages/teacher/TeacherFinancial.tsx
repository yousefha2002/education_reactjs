import BalanceBox from "../../components/teacher/BalanceBox";
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
    { header: 'Day', accessor: "date" },
    {header:"Price" , accessor:"price"},
    {header:"Tutor" , accessor:"tutor"},
];
export default function TeacherFinancial() {
    return (
        <div className='OuterDiv'>
            <div className="InnerDiv mb-8 grid grid-cols-3 gap-4">
                <BalanceBox title="Total Balance" number={20}/>
                <BalanceBox title="Paid Balance" number={20}/>
                <BalanceBox title="Remaining Balance" number={20}/>
            </div>
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
