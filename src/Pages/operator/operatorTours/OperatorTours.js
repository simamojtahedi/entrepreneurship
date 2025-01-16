import React, { useState } from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import { BsFillGearFill } from 'react-icons/bs'
import MainTable from '../../../Utils/table/MainTable'
import AddTour from './AddTour'
import { HiPlus, HiOutlineClipboardList } from 'react-icons/hi'
import { Button } from 'react-bootstrap'
import EditTour from './EditTour'

const OperatorTours = () => {
    const [tours, setTours] = useState(true)
    const [addTour, setAddTour] = useState(false)
    const [editTour, setEditTour] = useState(false)
    const [tourData, setTourData] = useState({})
    

    const addTourHandler = () => {
        setAddTour(true)
        setTours(false)
    }

    const toursHandler = () => {
        setTours(true)
        setAddTour(false)
    }


    const api = [ 
        { 
            code: '12', 
            name: 'ویکند', 
            origin: 'تهران', 
            destination: 'تهران', 
            submit_date: '1401-09-10', 
            tour_date: '1401-09-10', 
            tour_duration: '3 روز', 
            cash: '10000', 
            credit: '10000', 
            status: 'در حال ثبت نام' 
        },
    ]

    const data = api.map(v => ({...v, actions: 
        <div className='d-flex justify-content-around'>
            <Button className='btn-warning btn-sm px-3' onClick={()=> {handleEdit(v)}} >ویرایش</Button>
        </div>
    }))

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام رویداد', accessor: 'name' },
        { Header: 'مبدا', accessor: 'origin' },
        { Header: 'مقصد', accessor: 'destination' },
        { Header: 'مهلت ثبت نام', accessor: 'submit_date' },
        { Header: 'تاریخ حرکت', accessor: 'tour_date' },
        { Header: 'مدت اقامت', accessor: 'tour_duration' },
        { Header: 'مبلغ نقدی (ریال)', accessor: 'cash' },
        { Header: 'مبلغ اعتبار (ریال)', accessor: 'credit' },
        { Header: 'وضعیت', accessor: 'status' },
        { Header: 'عملیات', accessor: 'actions' },
    ]

    const handleEdit = (data) => {
        setEditTour(true)
        setTourData(data)
    }
      
    return (
        <Wrapper pageTitle="مدیریت رویدادها" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت رویدادها </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <div className='col-12 manage_header'>
                        <div className='manage_header_item' onClick={() => setAddTour(true) }>
                            <HiPlus />
                            <h6>اضافه کردن رویداد </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5 animate__animated animate__fadeInDown' >
                <MainTable data={data} columns={columns} />
            </div>

            {addTour && <AddTour addTour={addTour} setAddTour={setAddTour} />}
            {editTour && <EditTour editCenter={editTour} setEditCenter={setEditTour} data={tourData} /> }
        </Wrapper>
    )
}

export default OperatorTours
