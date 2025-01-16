import React from 'react'
import { Button } from 'react-bootstrap'
import MainTable from '../../../Utils/table/MainTable'

const Categories = () => {
    const api = [ 
        { 
            code: '1', 
            name: 'موبایل',
            subcategory: '',
        },
    ]

    const data = api.map(v => ({...v, actions: 
        <div className=''>
            <Button className='btn-danger btn-sm px-3 mx-1'>حذف</Button>
            <Button className='btn-warning btn-sm px-3 mx-1'>ویرایش</Button>
        </div>
    }))

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام دسته', accessor: 'name' },
        { Header: 'زیر دسته', accessor: 'subcategory' },
        { Header: 'عملیات', accessor: 'actions' },
    ]

    return (
        <div className='mt-5 animate__animated animate__fadeInDown' >
            <h6 className='main_title'>دسته‌بندی‌ها</h6>
            <MainTable data={data} columns={columns} />
        </div>
    )
}

export default Categories
