import React from 'react'
import { Button } from 'react-bootstrap'
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
        <div className='mt-5 animate__animated animate__fadeInDown' >
            <MainTable data={data} columns={columns} />
        </div>
    )
}

export default Departments
