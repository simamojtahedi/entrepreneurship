import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import MainTable from '../../../Utils/table/MainTable'
import { Button } from 'react-bootstrap'

const AdminEditusers = () => {

    const api = [ 
        // { code: '12', username: 'sima', name: 'سیما مجتهدی', number: '09128899123', city: 'تهران', education: 'لیسانس', points: '12', charge: '0', submit_date: '1400/2/2', last_login: '1400/3/1', status: 'فعال', login: 'ورود', },
        // { code: '10', username: 'user', name: 'آیسان طاهری', number: '09128899123', city: 'تهران', education: 'لیسانس', points: '16', charge: '0', submit_date: '1400/1/08', last_login: '1400/3/1', status: 'فعال', login: 'ورود' }
    ]

    const data = api.map(v => ({...v, actions: 
        <div className='d-flex justify-content-around'>
            {/* <Button className='btn-warning btn-sm px-3' onClick={() => (v)}>جزئیات</Button>
            <Button className='btn-danger btn-sm px-3'>حذف</Button> */}
        </div>
    }))

      const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام کاربری', accessor: 'username' },
        { Header: 'نام', accessor: 'name' },
        { Header: 'همراه', accessor: 'number' },
        { Header: 'شهر', accessor: 'city' },
        { Header: 'تحصیلات', accessor: 'education' },
        { Header: 'امتیاز', accessor: 'points' },
        { Header: 'شارژ', accessor: 'charge' },
        { Header: 'ثبت نام', accessor: 'submit_date' },
        { Header: 'آخرین ورود', accessor: 'last_login' },
        { Header: 'وضعیت', accessor: 'status' },
        { Header: 'ورود', accessor: 'login' },
        { Header: 'عملیات', accessor: 'actions' },
      ]

    return (
        <Wrapper pageTitle="مدیریت کاربران" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت کاربران </BreadCrumb>
                <div className='animate__animated animate__fadeIn'>
                    <MainTable data={data} columns={columns} />
                </div>
            </div>
        </Wrapper>
    )
}

export default AdminEditusers
