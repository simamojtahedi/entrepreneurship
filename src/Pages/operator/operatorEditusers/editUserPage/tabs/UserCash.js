import React from 'react'
import MainTable from '../../../../../Utils/table/MainTable'

const UserCash = () => {
    const data = [ 
        { 
            code: '1', 
            description: 'ثبت نام دوره دانشگاه- رشته مهندسی صنایع', 
            price: '0', 
            date: '1398-12-06', 
            tracking_code: '12122323', 
        },
    ]

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'توضیح', accessor: 'description' },
        { Header: 'مبلغ', accessor: 'price' },
        { Header: 'تاریخ', accessor: 'date' },
        { Header: 'کد پیگیری', accessor: 'tracking_code' },
    ]

    return (
        <div>
            <h6 className='main_title'>دریافت ها و پرداخت ها</h6>
            <MainTable data={data} columns={columns} />

        </div>
    )
}

export default UserCash
