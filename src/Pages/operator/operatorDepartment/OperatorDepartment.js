import React, { useState } from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import { BsFillGearFill } from 'react-icons/bs'
import MainTable from '../../../Utils/table/MainTable'
import { HiPlus, HiOutlineClipboardList } from 'react-icons/hi'
import { Button, Tab, Tabs } from 'react-bootstrap'
import AddCourse from './AddCourse'
import Departments from './Departments'
import CourseDetail from './CourseDetail'

const OperatorDepartment = () => {
    const [addCourse, setAddCourse] = useState(false)
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    }

    const handleShowDetails = (data) => {
        setShow(true)
    }

    const addCourseHandler = () => {
        setAddCourse(true)
    }

    const api = [ 
        { 
            code: '12', 
            name: 'مهارت ICDL', 
            center: 'دپارتمان آموزشی', 
            type: 'مجازی', 
            teacher: '-', 
            submit_date: '1400/2/2', 
            hours: '12', 
            cash: '10000', 
            credit: '10000', 
            status: 'در حال ثبت نام' 
        },
    ]

    const data = api.map(v => ({...v, actions: 
        <div className=''>
            <Button className='btn-warning btn-sm px-3 mx-1' onClick={()=> {handleShowDetails(v)}} >جزئیات</Button>
            <Button className='btn-danger btn-sm px-3 mx-1' >حذف</Button>
        </div>
    }))

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام دوره', accessor: 'name' },
        { Header: 'مرکز', accessor: 'center' },
        { Header: 'نوع', accessor: 'type' },
        { Header: 'مدرس', accessor: 'teacher' },
        { Header: 'مهلت ثبت نام', accessor: 'submit_date' },
        { Header: 'ساعات', accessor: 'hours' },
        { Header: 'مبلغ نقدی (ریال)', accessor: 'cash' },
        { Header: 'مبلغ بورسیه (ریال)', accessor: 'credit' },
        { Header: 'وضعیت', accessor: 'status' },
        { Header: 'عملیات', accessor: 'actions' },
    ]
      
    return (
        <Wrapper pageTitle="مدیریت دوره های آموزشی" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت دوره های آموزشی </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <Tabs defaultActiveKey="courses" id="OperatorDepartment">
                        <Tab eventKey="courses" title="لیست دوره‌ها">
                            <div className='manage_header'>
                                <div className='manage_header_item' onClick={addCourseHandler }>
                                    <HiPlus />
                                    <h6>اضافه کردن دوره </h6>
                                </div>
                            </div>
                            <MainTable data={data} columns={columns} />
                        </Tab>
                        <Tab eventKey="departments" title="مدیریت دپارتمان‌ها">
                            <Departments />
                        </Tab>
                    </Tabs>

                    {addCourse && <AddCourse show={addCourse} setAddCourse={setAddCourse}  />}
                    {show && <CourseDetail show={show} handleClose={handleClose} />}
                </div>
            </div>
        </Wrapper>
    )
}

export default OperatorDepartment
