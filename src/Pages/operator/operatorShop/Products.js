import React from 'react'
import { Button } from 'react-bootstrap'
import MainTable from '../../../Utils/table/MainTable'

const Products = () => {
    const api = [ 
        { 
            code: '1', 
            name: 'Tablet GLX Taaj Dual SIM 4G LTE - 8GB',
            category: 'موبایل',
            status: 'فعال',
        },
    ]

    const data = api.map(v => ({...v, actions: 
        <div className=''>
            <Button className='btn-danger btn-sm px-3 mx-1'>حذف</Button>
            <Button className='btn-primary btn-sm px-3 mx-1'>مشاهده</Button>
        </div>
    }))

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام محصول', accessor: 'name' },
        { Header: 'دسته', accessor: 'category' },
        { Header: 'وضعیت', accessor: 'status' },
        { Header: 'عملیات', accessor: 'actions' },
    ]

    return (
        <div className='mt-5 animate__animated animate__fadeInDown' >
            <h6 className='main_title'>محصولات</h6>
            <MainTable data={data} columns={columns} />
        </div>
    )
}

export default Products
