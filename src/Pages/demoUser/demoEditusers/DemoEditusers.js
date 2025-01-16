import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import MainTable from '../../../Utils/table/MainTable'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import './style.scss'

const DemoEditusers = () => {

    const api = [ 
        {  code: '1',  username: 'sima',  name: 'سیما مجتهدی',  city: 'تهران',  education: 'لیسانس',  group: '',  points: '12',  charge: '0',  submit_date: '1401/02/02', 
            status: <div className='table_items'>
                <span className='user_active'> فعال </span>
                <span className='user_notRegistered'> تایید نشده </span>
            </div>, 
        },
        {  code: '2',  username: 'reza',  name: 'رضا نادری',  city: 'رشت',  education: 'لیسانس',  group: '',  points: '12',  charge: '70000',  submit_date: '1400/02/09', 
            status: <div className='table_items'>
                <span className='user_active'> فعال </span>
                <span className='user_notRegistered'> تایید نشده </span>
            </div>, 
    },
    ]

    const data = api.map(data => ({...data, actions: 
        <div className='d-flex justify-content-around'>
            <Link className='btn-success btn-sm px-3' to={{ pathname: `/edit-user/${data.code}` , data }}>جزئیات</Link>
        </div>
    }))


    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام کاربری', accessor: 'username' },
        { Header: 'نام', accessor: 'name' },
        { Header: 'شهر', accessor: 'city' },
        { Header: 'تحصیلات', accessor: 'education' },
        { Header: 'گروه', accessor: 'group' },
        { Header: 'امتیاز', accessor: 'points' },
        { Header: 'شارژ', accessor: 'charge' },
        { Header: 'تاریخ ثبت نام', accessor: 'submit_date' },
        { Header: 'وضعیت', accessor: 'status' },
        { Header: 'عملیات', accessor: 'actions' },
    ]

    return (
        <Wrapper pageTitle="ویرایش کاربران" >
            <div className="page-wrapper">
                <BreadCrumb> ویرایش کاربران </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <MainTable data={data} columns={columns} />
                </div>
            </div>
        </Wrapper>
    )

}

export default DemoEditusers
