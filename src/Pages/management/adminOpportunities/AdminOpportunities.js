import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import MainTable from '../../../Utils/table/MainTable'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const AdminOpportunities = () => {
    const data = [ 
        { 
            code: '', 
            name: '', 
            provine: '', 
            city: '', 
            title: '', 
            subject: '', 
            submit_date: '', 
            edit_date: '', 
            last_check: '', 
            status: '', 
        },
    ]

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام', accessor: 'name' },
        { Header: 'استان', accessor: 'provine' },
        { Header: 'شهرستان ', accessor: 'city' },
        { Header: 'عنوان فهرست', accessor: 'title' },
        { Header: 'موضوع فهرست', accessor: 'subject' },
        { Header: 'تاریخ ثبت', accessor: 'submit_date' },
        { Header: 'آخرین اصلاح', accessor: 'edit_date' },
        { Header: 'آخرین بازبینی', accessor: 'last_check' },
        { Header: 'وضعیت', accessor: 'status' },

    ]

    return (
        <Wrapper pageTitle="مدیریت فرصت‌ها" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت فرصت‌ها </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <MainTable data={data} columns={columns} />
                </div>
            </div>
        </Wrapper>
    )
}

export default AdminOpportunities
