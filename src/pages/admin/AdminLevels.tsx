import React, { useState } from 'react'
import AdminLayout from '../../components/admin/layout/Admin.Layout'
import Table from '../../components/ui/Table'
import CreateButton from '../../components/ui/CreateButton';
import Modal from '../../components/ui/Modal';
import CreateBox from '../../components/admin/CreateBox';
import UpdateBox from '../../components/admin/UpdateBox';

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

    const [showModal, setShowModal] = useState(false);

    function handleClose()
    {
        setShowModal(p=>false)
    }

    function handleOpen()
    {
        setShowModal(p=>true)
    }

    const [showUpdateModal, setShowUpdateModal] = useState(false);

    function handleUpdateClose()
    {
        setShowUpdateModal(p=>false)
    }

    function handleUpdateOpen()
    {
        setShowUpdateModal(p=>true)
    }

    const [updatedLevel, setUpdatedLevel] = useState<Level>({}as Level);

    const renderButtons = (id:number) => {
        function handleUpdate(){
            const level  = data.find(le=>le.id===id);
            if(level){
                setUpdatedLevel(pre=>level);
                handleUpdateOpen();
            }
        }
        return <>
            <button key="update-button" className="ml-2 text-blue-500 hover:text-blue-700" onClick={handleUpdate}>Update</button>
        </>
    };


  return (
    <AdminLayout>
        {showModal&&<Modal handleClose={handleClose} title='Add New Level'><CreateBox handleClose={handleClose}/></Modal>}
        {showUpdateModal&&<Modal handleClose={handleUpdateClose} title='Update Level'><UpdateBox url='api url here for updae level'
        handleClose={handleUpdateClose} titleAr={updatedLevel.titleAr} titleEn={updatedLevel.titleEn}/></Modal>}
        <CreateButton handleOpen={handleOpen}/>
        <Table
            data={data}
            columns={columns}
            renderButtons={renderButtons}
        />
    </AdminLayout>
  )
}

export default AdminLevels