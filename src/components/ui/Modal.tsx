import React from 'react'

type props = {
    handleClose:()=>void,
    title:string,
    children:React.ReactNode
}

export default function Modal({handleClose,title,children}:props) {
    return (
        <>
            <div
            className="container xl:px-6 px-2 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none"
            >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold">
                    {title}
                    </h3>
                    <button
                    className="p-1 ml-auto bg-transparent border-0 font-semibold outline-none"
                    onClick={handleClose}
                    >
                    <span className="bg-transparent text-slate-500 text-3xl block outline-none">
                        ×
                    </span>
                    </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto min-w-[400px]">
                    {children}
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button
                    className="bg-main text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClose}
                    >
                        Save
                    </button>
                </div> */}
                </div>
            </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}