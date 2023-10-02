import React, {} from 'react'
import AdminLayout from '../../components/admin/layout/Admin.Layout'
import Table from '../../components/ui/Table'
import { Link } from 'react-router-dom';

export type TableColumn<T> = {
    header: string;
    accessor: keyof T;
  }
  
  type Student = {
    id:number,
    name:string,
    email:string,
    phone:string
  }
  
  const data:Student[] = [{id:1,name:"mohammed",email:"mohammed@gmail.com",phone:"123456789"},{id:2,name:"mohammed",email:"mohammed@gmail.com",phone:"123456789"}
,{id:3,name:"mohammed",email:"mohammed@gmail.com",phone:"123456789"},{id:4,name:"mohammed",email:"mohammed@gmail.com",phone:"123456789"}]
  
  const columns: TableColumn<Student>[] = [
      { header: 'ID', accessor: 'id' },
      { header: 'Name', accessor: "name" },
      {header:"Email" , accessor:"email"},
      {header:"Phone" ,accessor:"phone"}
  ];

function AdminViewStudents() {

    const renderButtons = (id:number) => {
        return <>
            {/* <Link to={`/student`} key="update-button" className="ml-2 text-blue-500 hover:text-blue-700">View</Link> */}
        </>
    };


  return (
    <AdminLayout>
        <Table
         data={data}
         columns={columns}
         renderButtons={renderButtons}
        />
    </AdminLayout>
  )
}

export default AdminViewStudents