import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import MainTable from '../../../Utils/table/MainTable'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const DemoCertificates = () => {
    const data = [ 
        { 
            code : '1', 
            user: 'مدیر سامانه', 
            course: 'تعیین سطح', 
            course_code : 'SR1212012', 
            date : '1399-10-19 13:04', 
            status: 'درخواستی' ,
        },
    ]

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'کاربر', accessor: 'user' },
        { Header: 'دوره', accessor: 'course' },
        { Header: 'کد مدرک', accessor: 'course_code' },
        { Header: 'تاریخ', accessor: 'date' },
        { Header: 'وضعیت', accessor: 'status' },
    ]

    return (
        <Wrapper pageTitle="هسته‌های کارآفرینی" >
            <div className="page-wrapper">
                <BreadCrumb> هسته‌های کارآفرینی </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <MainTable data={data} columns={columns} />
                </div>
            </div>
        </Wrapper>
    )
}

export default DemoCertificates
