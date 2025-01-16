import React from 'react'
import MainTable from '../../../Utils/table/MainTable'

const Departments = () => {
    const data = [ 

    ]

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام', accessor: 'name' },
        { Header: 'عملیات', accessor: 'actions' },
    ]


    return (
        <div className='mt-3' >
            <MainTable data={data} columns={columns} />
        </div>
    )
}

export default Departments
