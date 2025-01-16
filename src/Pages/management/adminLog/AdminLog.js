import React from 'react'
import { Button } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import MainTable from '../../../Utils/table/MainTable'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const AdminLog = () => {
    const data = [ 
        { 
            code : '1', 
            username: 'سیما مجتهدی', 
            category: 'NAVIGATION', 
            description : 'Now in admin-log', 
            level : '1', 
            id: '1.1.1.1',
            date: '1401-02-20 - 13:01:09'
        },
        { 
            code : '2', 
            username: 'سیما مجتهدی', 
            category: 'NAVIGATION', 
            description : 'Now in dashboard', 
            level : '1', 
            id: '1.1.1.1',
            date: '1401-02-20 - 13:01:01'
        },
        { 
            code : '3', 
            username: 'سیما مجتهدی', 
            category: 'NAVIGATION', 
            description : 'Now in login', 
            level : '1', 
            id: '1.1.1.1',
            date: '1401-02-20 - 13:00:20'
        },
    ]

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام کاربری', accessor: 'username' },
        { Header: 'دسته', accessor: 'category' },
        { Header: 'توضیح', accessor: 'description' },
        { Header: 'سطح', accessor: 'level' },
        { Header: 'شناسه', accessor: 'id' },
        { Header: 'تاریخ', accessor: 'date' },
    ]

    return (
        <Wrapper pageTitle="گزارشات" >
            <div className="page-wrapper">
                <BreadCrumb> گزارشات </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <MainTable data={data} columns={columns} />
                </div>
            </div>
        </Wrapper>
    )
}

export default AdminLog
