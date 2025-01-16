import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import MainTable from '../../../Utils/table/MainTable'
import AddCourse from './AddCourse'

const QuizCourse = () => {
    const [addCourse, setAddCourse] = useState(false)
    const data = [ 
        // { 
        //     code: '1', 
        //     title: 'ایده های نو', 
        //     province: 'تهران', 
        //     city: 'شهرستان', 
        //     type: 'مجازی', 
        //     owner: '',
        //     status: 'در حال ثبت نام' ,
        //     price: '',
        //     level: ''
        // },
    ]

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'عنوان', accessor: 'title' },
        { Header: 'استان', accessor: 'province' },
        { Header: 'شهرستان', accessor: 'city' },
        { Header: 'نوع', accessor: 'type' },
        { Header: 'برگذارکننده', accessor: 'owner' },
        { Header: 'وضعیت', accessor: 'status' },
        { Header: 'هزینه', accessor: 'price' },
        { Header: 'سطح', accessor: 'level' },
    ]

    return (
        <Wrapper pageTitle="مدیریت دوره‌های آزمون" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت دوره‌های آزمون </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <div className='col-12 manage_header'>
                        <div className='manage_header_item' onClick={() => setAddCourse(true) }>
                            <HiPlus />
                            <h6>اضافه کردن دوره </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5 animate__animated animate__fadeInDown' >
                <MainTable data={data} columns={columns} />
            </div>

            {addCourse && <AddCourse addCourse={addCourse} setAddCourse={setAddCourse} /> }
        </Wrapper>
    )
}

export default QuizCourse
