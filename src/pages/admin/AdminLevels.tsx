import React from 'react'
import AdminLayout from '../../components/admin/layout/Admin.Layout'
import Table from '../../components/ui/Table'

export type TableColumn<T> = {
    header: string;
    accessor: keyof T;
  }
  
  type Level = {
    id:number,
    titleAr:string,
    titleEn:string
  }
  
  const data:Level[] = [{id:1,titleAr:"ابتدائي",titleEn:"Elementry"},{id:2,titleAr:"ثانوى",titleEn:"Secondry"}]
  
  const columns: TableColumn<Level>[] = [
      { header: 'ID', accessor: 'id' },
      { header: 'Arabic Title', accessor: "titleAr" },
      {header:"English Title" , accessor:"titleEn"}
  ];

function AdminLevels() {

    
    const renderButtons = (id:number) => (
        <>
            <button key="update-button" className="ml-2 text-blue-500 hover:text-blue-700">Update</button>
        </>
    );

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

export default AdminLevels