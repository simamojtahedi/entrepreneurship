import React from 'react'
import MainTable from '../../../../../Utils/table/MainTable'

const UserPoints = () => {
    const data = [ 
        { 
            code: '1', 
            description: 'ثبت نام اولیه', 
            points: 8, 
            date: '1398-12-06', 
        },
    ]

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'توضیح', accessor: 'description' },
        { Header: 'مقدار', accessor: 'points' },
        { Header: 'تاریخ', accessor: 'date' },
    ]

    return (
        <div>
            <h6 className='main_title'>دریافت ها و پرداخت ها</h6>
            <MainTable data={data} columns={columns} />
        </div>
    )
}

export default UserPoints
