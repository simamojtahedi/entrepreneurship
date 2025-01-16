import React from 'react'
import { Button } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import MainTable from '../../../Utils/table/MainTable'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const OperatorCertificates = () => {
    const api = [ 
        { 
            code : '1', 
            user: 'مدیر سامانه', 
            melicode: '1111111', 
            passnumber : '111111', 
            father : 'پدر', 
            location: 'تهران',
            course: 'آزمون زندگی' ,
            certificatecode: '1234',
            date: '1400-06-10 - 13:13:09'
        },
    ]

    const data = api.map(v => ({...v, actions: 
        <div className='d-flex justify-content-around'>
            <Button className='btn-success btn-sm px-3' >چاپ</Button>
        </div>
    }))

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'کاربر', accessor: 'user' },
        { Header: 'کد ملی', accessor: 'melicode' },
        { Header: 'شماره شناسنامه', accessor: 'passnumber' },
        { Header: 'نام پدر', accessor: 'father' },
        { Header: 'محل صدور', accessor: 'location' },
        { Header: 'دوره', accessor: 'course' },
        { Header: 'کد مدرک', accessor: 'certificatecode' },
        { Header: 'تاریخ', accessor: 'date' },
        { Header: 'عملیات', accessor: 'actions' },
    ]

    return (
        <Wrapper pageTitle="مدیریت درخواست مدرک" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت درخواست مدرک </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <MainTable data={data} columns={columns} />
                </div>
            </div>
        </Wrapper>
    )
}

export default OperatorCertificates
