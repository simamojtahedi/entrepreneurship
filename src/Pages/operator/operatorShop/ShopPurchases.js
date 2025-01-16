import React from 'react'
import { Button } from 'react-bootstrap'
import MainTable from '../../../Utils/table/MainTable'

const ShopPurchases = () => {
    const api = [ 
        { 
            code: '12', 
            buyer: 'رضا مرادی',
            product: 'روزنه 1',
            date: '1400-10-22 - 13:55:09',
            status: 'در حال بررسی',
        },
    ]

    const data = api.map(v => ({...v, actions: 
        <div className=''>
            <Button className='btn-danger btn-sm px-3 mx-1'>حذف</Button>
        </div>
    }))

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'خریدار', accessor: 'buyer' },
        { Header: 'محصول', accessor: 'product' },
        { Header: 'زمان', accessor: 'date' },
        { Header: 'وضعیت', accessor: 'status' },
        { Header: 'عملیات', accessor: 'actions' },
    ]

    return (
        <div className='mt-5 animate__animated animate__fadeInDown' >
            <h6 className='main_title'>لیست خریدها</h6>
            <MainTable data={data} columns={columns} />
        </div>
    )
}

export default ShopPurchases
